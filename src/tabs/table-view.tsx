import Table from "./components/Table"
import { useTableData } from "./hook/useTableData"

import "../index.css"

const TablePage = () => {
  const { tableData, clearStorage } = useTableData()

  const handleCloseTab = async () => {
    await clearStorage()
    window.close()
  }
  console.log(tableData)

  return (
    <div className="p-4">
      <Table tableData={tableData} />
      <div className="mt-4 flex justify-center items-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleCloseTab}>
          Close Tab
        </button>
      </div>
    </div>
  )
}

export default TablePage
