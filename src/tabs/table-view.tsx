import { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";

const TablePage = () => {
  const [tableData, setTableData] = useState([]);
  const storage = new Storage();

  useEffect(() => {
    console.log("[New Tab] Loading table data from storage...");

    const fetchData = async () => {
      const data = await storage.get("tableData");

      if (!data || data.length === 0) {
        console.warn("[New Tab] No table data found in storage.");
        return;
      }

      console.log("[New Tab] Retrieved table data:", data);
      setTableData(data);
    };

    fetchData();

    // Cleanup storage when the tab is closed
    const handleTabClose = async () => {
      console.log("[New Tab] Clearing storage before tab closes.");
      await storage.remove("tableData");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  const handleCloseTab = async () => {
    await storage.remove("tableData");
    console.log("[New Tab] Storage cleared.");
    window.close();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Extracted Table Data</h1>
      {tableData.length === 0 ? (
        <p className="text-red-500">No table data found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {Object.keys(tableData[0]).map((key) => (
                <th key={key} className="border p-2">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i} className="border p-2">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-4">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleCloseTab}
        >
          Close Tab
        </button>
      </div>
    </div>
  );
};

export default TablePage;
