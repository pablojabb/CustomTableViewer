import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://apps.evsu.edu.ph/*"],
  all_frames: true
}

let currentIndex = 0
let previousTable: HTMLTableElement | null = null

const highlightTable = (index: number) => {
  const tables = document.querySelectorAll("table") as NodeListOf<HTMLTableElement>
  if (tables.length === 0 || index < 0 || index >= tables.length) return

  if (previousTable) {
    previousTable.style.border = ""
  }

  const table = tables[index]
  table.scrollIntoView({ behavior: "smooth", block: "center" })
  table.style.border = "2px solid yellow"

  previousTable = table
  currentIndex = index
}

const extractTableData = async () => {
  const storage = new Storage()

  const tables = document.querySelectorAll("table")
  if (tables.length === 0) return null

  const table = tables[currentIndex]
  const originalBorder = table.style.border
  table.style.border = ""

  try {
    // Try to get header row from <thead>, fallback to first <tbody> <tr>
    const headerRow =
      table.querySelector("thead tr") || table.querySelector("tbody tr")
    if (!headerRow) return null // no headers found at all

    const headers = Array.from(headerRow.querySelectorAll("th"))
      .slice(0) // use .slice(1) if you want to skip the first col
      .map((th) => th.innerText.trim())

    const allRows = Array.from(table.querySelectorAll("tbody tr"))

    // Remove headerRow if it's from <tbody>
    const dataRows = allRows.filter((tr) => tr !== headerRow)

    const rows = dataRows.map((tr) => {
      const cells = Array.from(tr.querySelectorAll("td"))
        .slice(0) // or slice(1) to skip first col
        .map((td) => {
          const hiddenInput = td.querySelector("input[type='hidden']") as HTMLInputElement | null
          return hiddenInput ? hiddenInput.value.trim() : td.innerText.trim()
        })

      return Object.fromEntries(
        headers.map((header, i) => [header, cells[i] || ""])
      )
    })

    await storage.set("tableData", rows)
    return rows.length > 0 ? "success" : null
  } finally {
    table.style.border = originalBorder
  }
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "highlight_table") {
    highlightTable(message.index)
    sendResponse({ status: "highlighted", index: currentIndex })
  }

  if (message.action === "get_table_count") {
    const tables = document.querySelectorAll("table")
    sendResponse({ count: tables.length })
    console.log("Table count:", tables.length)
  }

  if (message.action === "extract_table") {
    extractTableData().then((result) => {
      sendResponse({
        status: result === "success" ? "Table extracted" : "no_tabledata"
      })
    })
    return true // keeps the message channel open for async
  }
})
