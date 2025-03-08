import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"

const Table = ({ tableData }) => {
  // if (tableData.length === 0) {
  //   return (
  //     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-500 text-center">
  //       No table data found.
  //     </p>
  //   )
  // }

  return (
    <>
      {/* <table className="w-full border-collapse border border-gray-900">
        <thead>
          <tr>
            {["Days", "Sec-Subjcode", "Time"].map((key) => (
              <th key={key} className="border text-xl text-orange-300 p-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {["Days", "Sec-Subjcode", "Time"].map((key) => (
                <td key={key} className="border p-2">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}

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
        aspectRatio={1}
        eventColor="#3feb56"
       
      />
    </>
  )
}

export default Table
