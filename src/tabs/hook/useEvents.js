import { useMemo } from "react";

const dayMapping = {
  M: ["Monday"], T: ["Tuesday"], W: ["Wednesday"], TH: ["Thursday"],
  F: ["Friday"], S: ["Saturday"], SU: ["Sunday"],

  MON: ["Monday"], TU: ["Tuesday"], WED: ["Wednesday"], THU: ["Thursday"],
  THUR: ["Thursday"], FRI: ["Friday"], SAT: ["Saturday"], SUN: ["Sunday"],

  MW: ["Monday", "Wednesday"], MF: ["Monday", "Friday"], WF: ["Wednesday", "Friday"],
  TTH: ["Tuesday", "Thursday"], TT: ["Tuesday", "Thursday"], TW: ["Tuesday", "Wednesday"],
  THF: ["Thursday", "Friday"], SS: ["Saturday", "Sunday"],

  "M/W": ["Monday", "Wednesday"], "M/F": ["Monday", "Friday"], "W/F": ["Wednesday", "Friday"],
  "T/TH": ["Tuesday", "Thursday"], "T/W": ["Tuesday", "Wednesday"], "TH/F": ["Thursday", "Friday"],
  "S/SU": ["Saturday", "Sunday"]
};

const parseTime = (timeString) => {
  const [start, end] = timeString.split("-").map(str => str.trim());

  const convertTime = (time) => {
    let [hour, minute] = time.replace(" PM", "").replace(" AM", "").split(":");
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10) || 0;

    if (time.includes("PM") && hour !== 12) hour += 12;
    if (time.includes("AM") && hour === 12) hour = 0;

    return { hour, minute };
  };

  return [convertTime(start), convertTime(end)];
};

const getNextWeekdayDate = (weekday) => {
  const today = new Date();
  const currentDay = today.getDay();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const targetDay = weekDays.indexOf(weekday);

  if (targetDay === -1) return null;

  let daysToAdd = (targetDay - currentDay + 7) % 7 || 7;  // Ensures future dates

  const eventDate = new Date(today);
  eventDate.setDate(today.getDate() + daysToAdd);
  return eventDate;
};

const formatToISO = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
};

const useEvents = (scheduleData) => {
  return useMemo(() => {
    if (!Array.isArray(scheduleData)) return [];

    return scheduleData.flatMap(({ Days, "Sec-Subjcode": title, Time }) => {
      if (!Days || !title || !Time) return [];

      const normalizedDays = Days.toUpperCase().trim();
      const days = dayMapping[normalizedDays] || [];
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
