import { useMemo } from "react";

cconst dayMapping = {
  // Single-letter abbreviations
  M: ["Monday"],
  T: ["Tuesday"],
  W: ["Wednesday"],
  TH: ["Thursday"],
  F: ["Friday"],
  S: ["Saturday"],
  SU: ["Sunday"],

  // Short-form abbreviations
  MON: ["Monday"],
  TU: ["Tuesday"],
  WED: ["Wednesday"],
  THU: ["Thursday"],
  THUR: ["Thursday"],
  FRI: ["Friday"],
  SAT: ["Saturday"],
  SUN: ["Sunday"],

  // Two-day combinations
  MW: ["Monday", "Wednesday"],
  MF: ["Monday", "Friday"],
  WF: ["Wednesday", "Friday"],
  "T/TH": ["Tuesday", "Thursday"],
  TT: ["Tuesday", "Thursday"], // Sometimes used for Tue/Thu
  TW: ["Tuesday", "Wednesday"],
  THF: ["Thursday", "Friday"],
  SS: ["Saturday", "Sunday"] // Sometimes used for weekends
};


const parseTime = (timeString) => {
  const [start, end] = timeString.split("-");

  const convertTime = (time) => {
    let [hour, minute] = time.replace(" PM", "").replace(" AM", "").split(":");
    hour = parseInt(hour);
    minute = parseInt(minute) || 0;

    if (time.includes("PM") && hour !== 12) hour += 12;
    if (time.includes("AM") && hour === 12) hour = 0;

    return { hour, minute };
  };

  return [convertTime(start), convertTime(end)];
};

const getNextWeekdayDate = (weekday) => {
  const today = new Date();
  const currentDay = today.getDay();
  const targetDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(weekday);

  if (targetDay === -1) return null;

  const daysToAdd = targetDay >= currentDay ? targetDay - currentDay : 7 - (currentDay - targetDay);
  const eventDate = new Date(today);
  eventDate.setDate(today.getDate() + daysToAdd);
  return eventDate;
};

const formatToISO = (date) => {
  return date.toISOString().slice(0, 19) + getTimeZoneOffset();
};

const getTimeZoneOffset = () => {
  const offset = new Date().getTimezoneOffset();
  const hours = String(Math.abs(offset) / 60).padStart(2, "0");
  const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
  return offset < 0 ? `+${hours}:${minutes}` : `-${hours}:${minutes}`;
};

const useEvents = (scheduleData) => {
  return useMemo(() => {
    if (!Array.isArray(scheduleData)) return [];

    return scheduleData.flatMap(({ Days, "Sec-Subjcode": title, Time }) => {
      if (!Days || !title || !Time) return [];

      const days = dayMapping[Days] || [];
      const [startTime, endTime] = parseTime(Time);

      return days.map((day) => {
        const eventDate = getNextWeekdayDate(day);
        if (!eventDate) return null;

        const startDate = new Date(eventDate);
        startDate.setHours(startTime.hour, startTime.minute, 0, 0);

        const endDate = new Date(eventDate);
        endDate.setHours(endTime.hour, endTime.minute, 0, 0);

        return {
          title,
          start: formatToISO(startDate),
          end: formatToISO(endDate),
        };
      }).filter(Boolean);
    });
  }, [scheduleData]);
};

export default useEvents;