import { useMemo } from "react"

const dayMap = {
  "M": 1, "T": 2, "W": 3, "TH": 4, "F": 5, "S": 6, "SU": 0,
  "MON": 1, "TU": 2, "WED": 3, "THU": 4, "THUR": 4, "FRI": 5, "SAT": 6, "SUN": 0,
  "TUE": 2, "THURS": 4, "THURSDAY": 4,
  "MONDAY": 1, "TUESDAY": 2, "WEDNESDAY": 3, "THURSDAY": 4, "FRIDAY": 5, "SATURDAY": 6, "SUNDAY": 0,
  "MW": [1, 3], "MF": [1, 5], "WF": [3, 5], "TTH": [2, 4], "TF": [2, 5], "TW": [2, 3], "THF": [4, 5], "SS": [6, 0],
  "M/W": [1, 3], "M/F": [1, 5], "W/F": [3, 5], "T/TH": [2, 4], "T/W": [2, 3], "TH/F": [4, 5], "S/SU": [6, 0]
}

const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const parseTime = (timeStr, forcePM = false) => {
  timeStr = timeStr.replace(/[^0-9APM]/gi, ":").replace(/:+/g, ":")
  if (!timeStr.includes(":")) {
    timeStr = timeStr.replace(/(\d+)/, "$1:00")
  }

  const match = timeStr.match(/(\d{1,2}):?(\d{0,2})\s*(AM|PM)?/i)
  if (!match) return null

  let [_, hours, minutes, meridian] = match
  let h = parseInt(hours, 10)
  let m = minutes ? parseInt(minutes, 10) : 0

  if (!meridian) {
    if (h >= 4 && h <= 6) meridian = "PM"
    else if (h >= 7 && h <= 11) meridian = "AM"
    else meridian = "PM"
  }

  if (forcePM) meridian = "PM"
  if (meridian.toUpperCase() === "PM" && h !== 12) h += 12
  if (meridian.toUpperCase() === "AM" && h === 12) h = 0

  return { hours: h, minutes: m, meridian }
}

const getDateForWeekDay = (day) => {
  day = day.toUpperCase()
  const today = new Date()
  const currentDay = today.getDay()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - currentDay) // Set to Sunday

  const targetDays = Array.isArray(dayMap[day]) ? dayMap[day] : [dayMap[day]]
  return targetDays.map(targetDay => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + targetDay)
    return date.toISOString().split("T")[0]
  })
}

const formatTime = (iso) => {
  const date = new Date(iso)
  const h = date.getHours()
  const m = String(date.getMinutes()).padStart(2, "0")
  const ampm = h >= 12 ? "PM" : "AM"
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${m} ${ampm}`
}

const useScheduleEvents = (schedule) => {
  return useMemo(() => {
    const usedDays = new Set()
    const allDays = new Set([0, 1, 2, 3, 4, 5, 6])

    const events = schedule.flatMap(({ Days, "Sec-Subjcode": title, Time, Description }) => {
      const [startTimeStr, endTimeStr] = Time.split("-")
      const startTime = parseTime(startTimeStr)
      const forceEndPM = startTime?.meridian === "PM"
      const endTime = parseTime(endTimeStr, forceEndPM)
      const dayAbbrs = Days.split("/")

      return dayAbbrs.flatMap(day => {
        const eventDays = getDateForWeekDay(day)
        eventDays.forEach(() => usedDays.add(dayMap[day]))

        return eventDays.map(dateStr => ({
          title,
          start: `${dateStr}T${String(startTime.hours).padStart(2, "0")}:${String(startTime.minutes).padStart(2, "0")}:00`,
          end: `${dateStr}T${String(endTime.hours).padStart(2, "0")}:${String(endTime.minutes).padStart(2, "0")}:00`,
          extendedProps: {
            status: "normal",
            description: Description || ""
          }
        }))
      })
    })

    // Detect conflicts
    const conflictGroups = []

    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const a = events[i]
        const b = events[j]

        const sameDay = a.start.slice(0, 10) === b.start.slice(0, 10)
        const overlap = a.start < b.end && a.end > b.start

        if (sameDay && overlap) {
          a.extendedProps.status = "conflict"
          b.extendedProps.status = "conflict"

          const groupKey = `${a.start.slice(0, 10)}|${a.start.slice(11, 16)}-${a.end.slice(11, 16)}`
          let group = conflictGroups.find(g => g.key === groupKey)

          if (!group) {
            group = {
              key: groupKey,
              day: fullDayNames[new Date(a.start).getDay()],
              time: `${formatTime(a.start)} - ${formatTime(a.end)}`,
              subjects: []
            }
            conflictGroups.push(group)
          }

          const existingTitles = group.subjects.map(s => s.title)

          if (!existingTitles.includes(a.title)) {
            group.subjects.push({
              title: a.title,
              description: a.extendedProps.description
            })
          }

          if (!existingTitles.includes(b.title)) {
            group.subjects.push({
              title: b.title,
              description: b.extendedProps.description
            })
          }
        }
      }
    }

    const vacantDays = [...allDays]
      .filter(day => !usedDays.has(day))
      .map(day => fullDayNames[day])

    const conflictSubjects = [
      ...new Set(conflictGroups.flatMap(g => g.subjects.map(s => s.title)))
    ]
    console.log("conflictgroups", conflictGroups)

    return {
      events,
      conflictCount: conflictGroups.length,
      conflictSubjects,
      conflictGroups,
      vacantDays
    }
  }, [schedule])
}

export default useScheduleEvents
