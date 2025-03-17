import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const useTableData = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await storage.get("tableData")

      if (!data || data.length === 0) {
        return
      }

      let prevSecSubjcode = ""

      const filteredData = data
        .filter((row) => row["Days"])
        .map((row) => {
          let secSubjcode =
            `${row["Sec."] || ""}-${row["Subjcode"] || ""}`.trim()

          if (secSubjcode === "-") {
            secSubjcode = prevSecSubjcode
          } else {
            prevSecSubjcode = secSubjcode
          }

          return {
            Days: row["Days"],
            "Sec-Subjcode": secSubjcode,
            Time: row["Time"] || ""
          }
        })

      setTableData(filteredData)
    }

    fetchData()

    const handleTabClose = async () => {
      await storage.remove("tableData")
    }

    window.addEventListener("beforeunload", handleTabClose)

    return () => {
      window.removeEventListener("beforeunload", handleTabClose)
    }
  }, [])

  const clearStorage = async () => {
    await storage.remove("tableData")
  }

  return { tableData, clearStorage }
}
