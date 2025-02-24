import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://apps.evsu.edu.ph/*"], // Target only this website
  all_frames: true
};

window.onload = () => {
  console.log("Content script loaded");

  function getTableData() {
    const tables = document.querySelectorAll("table");
    if (tables.length === 0) {
      console.warn("No tables found on the page.");
      return [];
    }

    const table = tables.length > 1 ? tables[1] : tables[0]; // Get second table if available
    console.log("Extracting data from table:", table);

    const rows = Array.from(table.querySelectorAll("tbody tr"));
    if (rows.length === 0) {
      console.warn("No rows found in table.");
      return [];
    }

    // Get headers from the first row
    const headers = Array.from(rows[0].querySelectorAll("th, td")).map(th => th.innerText.trim());
    console.log("Table headers:", headers);

    // Extract data from the rest of the rows (skip the first row since it's headers)
    const data = rows.slice(1).map(tr => {
      const cells = Array.from(tr.querySelectorAll("td"));
      if (cells.length < headers.length) return null; // Skip invalid rows (like "Total Units" row)

      return headers.reduce((acc, header, index) => {
        acc[header] = cells[index] ? cells[index].innerText.trim() : "";
        return acc;
      }, {});
    }).filter(row => row !== null); // Remove skipped rows

    console.log("Extracted table data:", data);
    return data;
  }

  const tableData = getTableData();

  // Only send message if data is extracted
  if (tableData.length > 0) {
    chrome.runtime.sendMessage({ action: "sendTableData", data: tableData });
  }
};
