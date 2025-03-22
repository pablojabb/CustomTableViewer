import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import { FiArrowDownCircle } from "react-icons/fi";

import DarkModeToggle from "~DarkModeToggle "
import { useToJpeg } from '@hugocxl/react-to-image'
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


  //TODO: Plan next update (features) 
  //TODO: Image feature

  // const handleDownload = async () => {
  //   convertToPng
  // }

  const [state, convertToJpeg, ref] = useToJpeg<HTMLDivElement>({
    onSuccess: data => {
      const link = document.createElement('a');
      link.href = data;
      link.download = 'screenshot.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });

  return (
    <>
      <div className="rildiv"   >
        <div className="flex justify-between items-center mb-2 ">
          <DarkModeToggle />
          <button
            className="p-2 text-sm flex items-center justify-center
             font-semibold rounded transition-colors 
          bg-light-m-btn dark:bg-dark-m-btn 
          hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
          active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active
          text-light-content-text dark:text-dark-content-text"
          onClick={convertToJpeg}>
            <span className="mr-1 text-lg"><FiArrowDownCircle/></span> Download as PNG
          </button>
        </div>
        <div ref={ref} className="w-auto h-auto dark:bg-dark-bg bg-light-bg">
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
        </div>
        
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
