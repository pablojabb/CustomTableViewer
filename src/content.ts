import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://apps.evsu.edu.ph/*"],
  all_frames: true
}

const extractTableData = async () => {
  const storage = new Storage()
  const tables = document.querySelectorAll("table")

  if (tables.length === 0) {
    return null // No table found
  }

  const table = tables.length > 1 ? tables[1] : tables[0]
  const headers = Array.from(table.querySelectorAll("th")).map((th) =>
    th.innerText.trim()
  )

  const rows = Array.from(table.querySelectorAll("tr"))
    .slice(1)
    .map((tr) => {
      const cells = Array.from(tr.querySelectorAll("td")).map((td) =>
        td.innerText.trim()
      )
      return Object.fromEntries(
        headers.map((header, i) => [header, cells[i] || ""])
      )
    })

  await storage.set("tableData", rows)

  return rows.length > 0 ? "success" : null
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extract_table") {
    extractTableData().then((result) => {
      if (result === "success") {
        sendResponse({ status: "Table extracted" })
      } else {
        sendResponse({ status: "no_tabledata" })
      }
    })
    return true // Keep the message channel open
  }
})
