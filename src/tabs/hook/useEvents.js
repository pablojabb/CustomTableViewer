import { useMemo } from "react";

const dayMapping = {
  M: ["Monday"], T: ["Tuesday"], W: ["Wednesday"], TH: ["Thursday"],
  F: ["Friday"], S: ["Saturday"], SU: ["Sunday"],
  MON: ["Monday"], TU: ["Tuesday"], WED: ["Wednesday"], THU: ["Thursday"], THUR: ["Thursday"],
  FRI: ["Friday"], SAT: ["Saturday"], SUN: ["Sunday"],
  MW: ["Monday", "Wednesday"], MF: ["Monday", "Friday"], WF: ["Wednesday", "Friday"],
  TTH: ["Tuesday", "Thursday"], TT: ["Tuesday", "Thursday"], TW: ["Tuesday", "Wednesday"],
  THF: ["Thursday", "Friday"], SS: ["Saturday", "Sunday"],
  "M/W": ["Monday", "Wednesday"], "M/F": ["Monday", "Friday"], "W/F": ["Wednesday", "Friday"],
  "T/TH": ["Tuesday", "Thursday"], "T/W": ["Tuesday", "Wednesday"], "TH/F": ["Thursday", "Friday"],
  "S/SU": ["Saturday", "Sunday"]
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

const useEvents = () => {
  return useMemo(() => {
    // Ask user for input
    const userInput = window.prompt("Enter schedule (e.g., 'MW|Math|10:00 AM-11:30 AM'):");
    if (!userInput) return [];

    // Parse input format: "MW|Math|10:00 AM-11:30 AM"
    const [Days, title, Time] = userInput.split("|");
    if (!Days || !title || !Time) {
      alert("Invalid input format! Use 'Days|Title|StartTime-EndTime'");
      return [];
    }

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
  }, []);
};

export default useEvents;
