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
    <div className="p-4 dark:bg-dark-bg">
      <Table tableData={tableData} />
      <div className=" flex justify-center items-center">
        <button
          className="p-2 px-4 text-base font-semibold rounded transition-colors 
          bg-light-m-btn dark:bg-dark-m-btn 
          hover:bg-light-m-btn-hover dark:hover:bg-dark-m-btn-hover 
          active:bg-light-m-btn-active dark:active:bg-dark-m-btn-active
          text-light-content-text dark:text-dark-content-text"
          onClick={handleCloseTab}>
          Close Tab
        </button>
      </div>
    </div>
  )
}

export default TablePage
