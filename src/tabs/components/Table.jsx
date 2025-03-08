const Table = ({ tableData }) => {
    if (tableData.length === 0) {
      return (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-500 text-center">
          No table data found.
        </p>
      )
    }
  
    return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {["Days", "Sec-Subjcode", "Time"].map((key) => (
              <th key={key} className="border p-2">
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
      </table>
    )
  }
  
  export default Table
  