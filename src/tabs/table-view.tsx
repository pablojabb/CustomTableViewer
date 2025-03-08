import { useTableData } from "./hook/useTableData"
import Table from "./components/Table"
import "../index.css"

const TablePage = () => {
  const { tableData, clearStorage } = useTableData()

  const handleCloseTab = async () => {
    await clearStorage()
    window.close()
  }

  return (
    <div className="p-4">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
        Extracted Table Data
      </h1>
      <Table tableData={tableData} />
      <div className="mt-4 flex justify-center items-center">
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleCloseTab}>
        Close Tab
      </button>
    </div>
    </div>
  )
}

export default TablePage
