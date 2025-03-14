import { useMemo } from "react";

const dayMap = {
  "M": 1, "T": 2, "W": 3, "TH": 4, "F": 5, "S": 6, "SU": 0,
  "MON": 1, "TU": 2, "WED": 3, "THU": 4, "THUR": 4, "FRI": 5, "SAT": 6, "SUN": 0,
  "MW": [1, 3], "MF": [1, 5], "WF": [3, 5], "TTH": [2, 4], "TT": [2, 4], "TW": [2, 3], "THF": [4, 5], "SS": [6, 0],
  "M/W": [1, 3], "M/F": [1, 5], "W/F": [3, 5], "T/TH": [2, 4], "T/W": [2, 3], "TH/F": [4, 5], "S/SU": [6, 0]
};

const parseTime = (timeStr) => {
  const [time, meridian] = timeStr.split(/(AM|PM)/);
  let [hours, minutes] = time.split(":").map(Number);
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
};

const getDateForWeekDay = (day) => {
  const today = new Date();
  const currentDay = today.getDay();
  const targetDays = Array.isArray(dayMap[day]) ? dayMap[day] : [dayMap[day]];

  return targetDays.map(targetDay => {
    let diff;
    if (currentDay === 0) { // Sunday
      diff = targetDay - 7;
    } else if (currentDay === 1) { // Monday
      diff = targetDay > currentDay ? targetDay - currentDay : 7 - (currentDay - targetDay);
    } else { // Any other day
      diff = targetDay <= currentDay ? targetDay - currentDay : 7 - (currentDay - targetDay);
    }
    
    const resultDate = new Date(today);
    resultDate.setDate(today.getDate() + diff);
    return resultDate.toISOString().split("T")[0];
  });
};

const useScheduleEvents = (schedule) => {
  return useMemo(() => {
    return schedule.flatMap(({ Days, "Sec-Subjcode": title, Time }) => {
      const [startTime, endTime] = Time.split("-").map(parseTime);
      const dayAbbreviations = Days.split("/");

      return dayAbbreviations.flatMap((day) => {
        return getDateForWeekDay(day).map(dateStr => ({
          title,
          start: `${dateStr}T${String(startTime.hours).padStart(2, "0")}:${String(startTime.minutes).padStart(2, "0")}:00`,
          end: `${dateStr}T${String(endTime.hours).padStart(2, "0")}:${String(endTime.minutes).padStart(2, "0")}:00`,
          extendedProps: { status: "normal" },
        }));
      });
    });
  }, [schedule]);
};

export default useScheduleEvents;
