import { useEffect, useState } from "react"
import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const useTableData = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    console.log("[New Tab] Loading table data from storage...")

    const fetchData = async () => {
      const data = await storage.get("tableData")

      if (!data || data.length === 0) {
        console.warn("[New Tab] No table data found in storage.")
        return
      }

      console.log("[New Tab] Retrieved table data:", data)

      // Merge "Sec" and "Subjcode" into "Sec-Subjcode"
      const filteredData = data.map((row) => ({
        Days: row["Days"] || "",
        "Sec-Subjcode": `${row["Sec."] || ""}-${row["Subjcode"] || ""}`.trim(),
        Time: row["Time"] || ""
      }))

      setTableData(filteredData)
    }

    fetchData()

    // Cleanup storage when the tab is closed
    const handleTabClose = async () => {
      console.log("[New Tab] Clearing storage before tab closes.")
      await storage.remove("tableData")
    }

    window.addEventListener("beforeunload", handleTabClose)

    return () => {
      window.removeEventListener("beforeunload", handleTabClose)
    }
  }, [])

  const clearStorage = async () => {
    await storage.remove("tableData")
    console.log("[New Tab] Storage cleared.")
  }

  return { tableData, clearStorage }
}
