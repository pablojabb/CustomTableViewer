import type { PlasmoCSConfig } from "plasmo";
import { Storage } from "@plasmohq/storage";

export const config: PlasmoCSConfig = {
  matches: ["https://apps.evsu.edu.ph/*"],
  all_frames: true
};

const extractTableData = async () => {
  console.log("[Content Script] Running extraction...");

  const storage = new Storage();
  const tables = document.querySelectorAll("table");

  if (tables.length === 0) {
    console.warn("[Content Script] No tables found on this page.");
    return;
  }

  const table = tables.length > 1 ? tables[1] : tables[0]; // Get second table if available
  console.log(`[Content Script] Found ${tables.length} table(s), extracting from the ${tables.length > 1 ? "second" : "first"} one.`);

  const headers = Array.from(table.querySelectorAll("th")).map((th) => th.innerText.trim());
  console.log("[Content Script] Extracted Headers:", headers);

  const rows = Array.from(table.querySelectorAll("tr")).slice(1).map((tr) => {
    const cells = Array.from(tr.querySelectorAll("td")).map((td) => td.innerText.trim());
    return Object.fromEntries(headers.map((header, i) => [header, cells[i] || ""]));
  });

  console.log("[Content Script] Extracted Table Data:", rows);

  // Store the data in Plasmo Storage
  await storage.set("tableData", rows);
  console.log("[Content Script] Table data saved in storage.");
};

// Run on page load
window.onload = extractTableData;

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "extract_table") {
    extractTableData();
  }
});
