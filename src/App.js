import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function App() {
  const [excelFile, setExcelFile] = useState(null);

  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  const convertToJson = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      const jsonBlob = new Blob([JSON.stringify(json, null, 2)], {
        type: "application/json",
      });
      saveAs(jsonBlob, "converted.json");
    };
    reader.readAsArrayBuffer(excelFile);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Excel to JSON Converter
        </h1>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
        />
        <button
          onClick={convertToJson}
          disabled={!excelFile}
          className={`w-full py-2 rounded-lg font-semibold text-white ${
            excelFile
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Convert and Download JSON
        </button>
      </div>
    </div>
  );
}

export default App;
