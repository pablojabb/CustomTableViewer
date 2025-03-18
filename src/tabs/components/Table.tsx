import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"

import DarkModeToggle from "~DarkModeToggle "

import useScheduleEvents from "./../hook/useScheduleEvents"
import SummaryCard from "./SummaryCard"

const Table = ({ tableData }) => {
  if (tableData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-[40vh] mb-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-center">
          No table data found.
        </p>
      </div>
    )
  }

  const { vacantDays, events, conflictCount, conflictSubjects } =
    useScheduleEvents(tableData)

  //TODO: Release Beta version
  //TODO: Plan next update (features) 

  const handleDownload = async () => {
   alert("Coming Soon😎!!")
  }

  return (
    <>
      <div className="rildiv">
        <div className="flex justify-between items-center mb-2">
          <DarkModeToggle />
          <button
            className="p-2 text-sm
             font-semibold rounded transition-colors 
          bg-light-m-btn dark:bg-dark-m-btn 
          hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
          active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active
          text-light-content-text dark:text-dark-content-text"
          onClick={handleDownload}>
            Download Image
          </button>
        </div>
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
            if (info.event.extendedProps.status === "conflict") {
              info.el.style.backgroundColor = "oklch(0.704 0.191 22.216)"
            } else if (info.event.extendedProps.status === "normal") {
              info.el.style.backgroundColor = "#a0c8f0"
            }
          }}
        />
        <SummaryCard
          vacantDays={vacantDays}
          conflictCount={conflictCount}
          conflictSubjects={conflictSubjects}
        />
      </div>
    </>
  )
}

export default Table
