import { useMemo } from "react";

const dayMap = {
  "M": 1, "T": 2, "W": 3, "TH": 4, "F": 5, "S": 6, "SU": 0,
  "MON": 1, "TU": 2, "WED": 3, "THU": 4, "THUR": 4, "FRI": 5, "SAT": 6, "SUN": 0,
  "THUR": 4, "TUE": 2, "THURS": 4, "THURSDAY": 4,
  "MONDAY": 1, "TUESDAY": 2, "WEDNESDAY": 3, "THURSDAY": 4, "FRIDAY": 5, "SATURDAY": 6, "SUNDAY": 0,
  "MW": [1, 3], "MF": [1, 5], "WF": [3, 5], "TTH": [2, 4], "TF": [2, 5], "TW": [2, 3], "THF": [4, 5], "SS": [6, 0],
  "M/W": [1, 3], "M/F": [1, 5], "W/F": [3, 5], "T/TH": [2, 4], "T/W": [2, 3], "TH/F": [4, 5], "S/SU": [6, 0]
};

const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const parseTime = (timeStr, forcePM = false) => {
  timeStr = timeStr.replace(/[^0-9APM]/gi, ":").replace(/:+/g, ":"); 
  if (!timeStr.includes(":")) {
    timeStr = timeStr.replace(/(\d+)/, "$1:00"); 
  }

  const match = timeStr.match(/(\d{1,2}):?(\d{0,2})\s*(AM|PM)?/i);
  if (!match) return null;

  let [_, hours, minutes, meridian] = match;
  hours = parseInt(hours, 10);
  minutes = minutes ? parseInt(minutes, 10) : 0;

  if (!meridian) {
    if (hours >= 4 && hours <= 6) {
      meridian = "PM";
    } else if (hours >= 7 && hours <= 11) {
      meridian = "AM";
    } else {
      meridian = "PM";
    }
  }

  if (forcePM) meridian = "PM";

  if (meridian.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (meridian.toUpperCase() === "AM" && hours === 12) hours = 0;

  return { hours, minutes, meridian };
};

const getDateForWeekDay = (day) => {
  const today = new Date();
  const currentDay = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay); // Set to Sunday of the current week

  const targetDays = Array.isArray(dayMap[day]) ? dayMap[day] : [dayMap[day]];

  return targetDays.map(targetDay => {
    const resultDate = new Date(startOfWeek);
    resultDate.setDate(startOfWeek.getDate() + targetDay); // Ensure it's in the same week
    return resultDate.toISOString().split("T")[0];
  });
};


const useScheduleEvents = (schedule) => {
  return useMemo(() => {
    const usedDays = new Set();
    const allDays = new Set([0, 1, 2, 3, 4, 5, 6]); 

    const events = schedule.flatMap(({ Days, "Sec-Subjcode": title, Time }) => {
      const [startTimeStr, endTimeStr] = Time.split("-");

      const startTime = parseTime(startTimeStr);
      const forceEndPM = startTime.meridian === "PM";
      const endTime = parseTime(endTimeStr, forceEndPM);

      const dayAbbreviations = Days.split("/");

      return dayAbbreviations.flatMap((day) => {
        const eventDays = getDateForWeekDay(day);
        eventDays.forEach(() => usedDays.add(dayMap[day])); 

        return eventDays.map(dateStr => ({
          title,
          start: `${dateStr}T${String(startTime.hours).padStart(2, "0")}:${String(startTime.minutes).padStart(2, "0")}:00`,
          end: `${dateStr}T${String(endTime.hours).padStart(2, "0")}:${String(endTime.minutes).padStart(2, "0")}:00`,
          extendedProps: { status: "normal" },
        }));
      });
    });

   
    const vacantDays = [...allDays]
      .filter(day => !usedDays.has(day))
      .map(day => fullDayNames[day]);

    const conflicts = [];
    events.forEach((event, index) => {
      events.forEach((otherEvent, otherIndex) => {
        if (
          index !== otherIndex &&
          event.start < otherEvent.end &&
          event.end > otherEvent.start
        ) {
          event.extendedProps.status = "conflict";
          otherEvent.extendedProps.status = "conflict";
          conflicts.push(event.title, otherEvent.title);
        }
      });
    });

    return {
      events,
      conflictCount: new Set(conflicts).size,
      conflictSubjects: [...new Set(conflicts)],
      vacantDays
    };
  }, [schedule]);
};

export default useScheduleEvents;
