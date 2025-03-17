import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import useScheduleEvents from './../hook/useScheduleEvents';


const Table = ({ tableData }) => {
  // if (tableData.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center mt-[40vh]">
  //       <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-center">
  //         No table data found.
  //       </p>
  //     </div>
  //   )
  // }

  
  
  const events = useScheduleEvents(tableData);
  console.log(events)


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
            if (info.event.extendedProps.status === "conflict") {
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
