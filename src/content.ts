import type { PlasmoCSConfig } from "plasmo";
import { Storage } from "@plasmohq/storage";

export const config: PlasmoCSConfig = {
  matches: ["https://apps.evsu.edu.ph/*"],
  all_frames: true
};

const extractTableData = async () => {


  const storage = new Storage();
  const tables = document.querySelectorAll("table");

  if (tables.length === 0) {
    console.warn(" No tables found on this page.");
    return;
  }

  const table = tables.length > 1 ? tables[1] : tables[0]; 

  const headers = Array.from(table.querySelectorAll("th")).map((th) => th.innerText.trim());


  const rows = Array.from(table.querySelectorAll("tr")).slice(1).map((tr) => {
    const cells = Array.from(tr.querySelectorAll("td")).map((td) => td.innerText.trim());
    return Object.fromEntries(headers.map((header, i) => [header, cells[i] || ""]));
  });

  console.log("[Content Script] Extracted Table Data:", rows);

  
  await storage.set("tableData", rows);

};


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extract_table") {
    extractTableData().then(() => {
      sendResponse({ status: "Table extracted" })
    })
    return true 
  }
})
