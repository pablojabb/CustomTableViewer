import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const useTableData = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await storage.get("tableData")
      if (!data || data.length === 0) return

      // console.log("Fetched raw table data:", data)

      let processedData = []
      //format A
      if (data[0]?.["Disp Code"]) {
        processedData = data.flatMap((row) => {
          const baseCode = row["Disp Code"] || ""
          const block = row["Block"] || ""
          const results = []

          if (row["Lec. Time"] && row["Lec. Days"]) {
            results.push({
              Days: row["Lec. Days"],
              "Sec-Subjcode": `${block} - ${baseCode}-LEC`,
              Time: row["Lec. Time"]
            })
          }

          if (row["Lab. Time"] && row["Lab. Days"]) {
            results.push({
              Days: row["Lab. Days"],
              "Sec-Subjcode": `${block} - ${baseCode}-LAB`,
              Time: row["Lab. Time"]
            })
          }

          return results
        })
      }
      //  Format B
      else {
        let prevSecSubjcode = ""

        processedData = data
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
      }

      setTableData(processedData)
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
