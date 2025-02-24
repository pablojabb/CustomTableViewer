import { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";

const TablePage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log("[New Tab] Loading table data from storage...");

    const fetchData = async () => {
      const storage = new Storage();
      const dataString = await storage.get("tableData");
      const data = dataString ? JSON.parse(dataString) : [];

      if (!data || data.length === 0) {
        console.warn("[New Tab] No table data found in storage.");
        return;
      }

      console.log("[New Tab] Retrieved table data:", data);
      setTableData(data);
    };

    fetchData();
  }, []);

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
                  <td key={i} className="border p-2">{value as React.ReactNode}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablePage;
