import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"

const Table = ({ tableData }) => {
  if (tableData.length === 0) {
    return (
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-500 text-center">
        No table data found.
      </p>
    )
  }

  return (
    <>

    
<div className="w-[700px] p-10 border rounded-xl shadow-md bg-white rildiv">
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
        events={[
          {
            title: "Team Meeting",
            start: new Date().setHours(10, 0, 0), // Today at 10 AM
            end: new Date().setHours(11, 0, 0)
          },
          {
            title: "Project Deadline",
            start: new Date(
              new Date().setDate(new Date().getDate() - 1)
            ).setHours(14, 0, 0), // Tomorrow at 2 PM
            end: new Date(
              new Date().setDate(new Date().getDate() - 1)
            ).setHours(15, 0, 0)
          },
          {
            title: "Client Presentation",
            start: new Date(
              new Date().setDate(new Date().getDate() - 2)
            ).setHours(9, 20, 0), // Two days from now at 9:30 AM
            end: new Date(
              new Date().setDate(new Date().getDate() - 2)
            ).setHours(10, 10, 0)
          },
          {
            title: "Workout Session",
            start: new Date(
              new Date().setDate(new Date().getDate() - 3)
            ).setHours(18, 22, 0), // Three days from now at 6 PM
            end: new Date(
              new Date().setDate(new Date().getDate() - 3)
            ).setHours(19, 33, 0)
          },
          {
            title: "Code Review",
            start: new Date(
              new Date().setDate(new Date().getDate() - 4)
            ).setHours(17, 0, 0), // Four days from now at 4 PM
            end: new Date(
              new Date().setDate(new Date().getDate() - 4)
            ).setHours(19, 30, 0)
          }
        ]}
      />

      </div>
  
    </>
  )
}

export default Table
