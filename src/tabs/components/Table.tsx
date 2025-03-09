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
 
  const events = useEvents(tableData);
  // console.log(events)
  
  
  return (
    <>
    
      <div className="rildiv">
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          eventShortHeight={15}
          allDaySlot={false}
          slotMaxTime={"21:00:00"}
          expandRows={true}
          slotMinTime={"07:00:00"}
          contentHeight={600}
          dayHeaderFormat={{ weekday: "long" }}
          headerToolbar={false}
          eventColor="#3feb56"
          events={events}
          eventBackgroundColor="red"  // an option!
         
        />
       
      </div>
    </>
  )
}

export default Table
