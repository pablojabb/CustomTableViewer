import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"

import useEvents from "../hook/useEvents"

const Table = ({ tableData }) => {
  if (tableData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-[40vh]">
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-center">
          No table data found.
        </p>
      </div>
    )
  }

  

  const testSchedule = [
    // Single-letter abbreviations
    { Days: "M", "Sec-Subjcode": "CS101", Time: "8:00 AM-9:30 AM" },
    { Days: "T", "Sec-Subjcode": "MATH102", Time: "10:00 AM-11:30 AM" },
    { Days: "W", "Sec-Subjcode": "ENG103", Time: "1:00 PM-2:30 PM" },
    { Days: "TH", "Sec-Subjcode": "HIST104", Time: "3:00 PM-4:30 PM" },
    { Days: "F", "Sec-Subjcode": "BIO105", Time: "9:00 AM-10:00 AM" },
    { Days: "S", "Sec-Subjcode": "CHEM106", Time: "2:00 PM-3:30 PM" },
    { Days: "SU", "Sec-Subjcode": "PHYS107", Time: "4:00 PM-5:30 PM" },
  
    // Short-form abbreviations
    { Days: "MON", "Sec-Subjcode": "STAT201", Time: "8:30 AM-10:00 AM" },
    { Days: "TU", "Sec-Subjcode": "ECON202", Time: "11:00 AM-12:30 PM" },
    { Days: "WED", "Sec-Subjcode": "PSYC203", Time: "1:30 PM-3:00 PM" },
    { Days: "THU", "Sec-Subjcode": "SOC204", Time: "3:30 PM-5:00 PM" },
    { Days: "THUR", "Sec-Subjcode": "PHIL205", Time: "5:30 PM-7:00 PM" },
    { Days: "FRI", "Sec-Subjcode": "LAW206", Time: "10:00 AM-11:30 AM" },
    { Days: "SAT", "Sec-Subjcode": "MUS207", Time: "1:00 PM-2:30 PM" },
    { Days: "SUN", "Sec-Subjcode": "ART208", Time: "3:00 PM-4:30 PM" },
  
    // Two-day combinations (no slash)
    { Days: "MW", "Sec-Subjcode": "CS301", Time: "9:00 AM-10:30 AM" },
    { Days: "MF", "Sec-Subjcode": "MATH302", Time: "11:00 AM-12:30 PM" },
    { Days: "WF", "Sec-Subjcode": "ENG303", Time: "1:00 PM-2:30 PM" },
    { Days: "TTH", "Sec-Subjcode": "HIST304", Time: "3:00 PM-4:30 PM" },
    { Days: "TT", "Sec-Subjcode": "BIO305", Time: "5:00 PM-6:30 PM" },
    { Days: "TW", "Sec-Subjcode": "CHEM306", Time: "7:00 AM-8:30 AM" },
    { Days: "THF", "Sec-Subjcode": "PHYS307", Time: "9:30 AM-11:00 AM" },
    { Days: "SS", "Sec-Subjcode": "STAT308", Time: "12:00 PM-1:30 PM" },
  
    // Two-day combinations with slashes
    { Days: "M/W", "Sec-Subjcode": "ECON401", Time: "8:00 AM-9:30 AM" },
    { Days: "M/F", "Sec-Subjcode": "PSYC402", Time: "10:00 AM-11:30 AM" },
    { Days: "W/F", "Sec-Subjcode": "SOC403", Time: "12:00 PM-1:30 PM" },
    { Days: "T/TH", "Sec-Subjcode": "PHIL404", Time: "2:00 PM-3:30 PM" },
    { Days: "T/W", "Sec-Subjcode": "LAW405", Time: "4:00 PM-5:30 PM" },
    { Days: "TH/F", "Sec-Subjcode": "MUS406", Time: "6:00 PM-7:30 PM" },
    { Days: "S/SU", "Sec-Subjcode": "ART407", Time: "8:00 AM-9:30 AM" },
  ];

  // const events = useEvents(tableData);
  const events = useEvents(testSchedule);
  // console.log(events)

  // const events = [
  //   {
  //     title: "Meeting",
  //     start: "2025-03-10T10:00:00",
  //     end: "2025-03-10T11:30:00",
  //     extendedProps: {
  //       status: "urgent"
  //     }
  //   },
  //   {
  //     title: "Lunch",
  //     start: "2025-03-11T12:00:00",
  //     end: "2025-03-11T01:30:00",
  //     extendedProps: {
  //       status: "normal"
  //     }
  //   }
  // ]

  return (
    <>
      <div className="rildiv">
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          eventShortHeight={15}
          allDaySlot={false}
          slotMaxTime="21:00:00"
          slotMinTime="07:00:00"
          expandRows={true}
          contentHeight={600}
          dayHeaderFormat={{ weekday: "short" }}
          headerToolbar={false}
          events={events}
          eventDidMount={(info) => {
            if (info.event.extendedProps.status === "urgent") {
              info.el.style.backgroundColor = "red"
            } else if (info.event.extendedProps.status === "normal") {
              info.el.style.backgroundColor = "green"
            }
          }}
        />
      </div>
    </>
  )
}

export default Table
