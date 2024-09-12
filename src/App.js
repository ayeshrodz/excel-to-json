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
    <div>
      <h1>Excel to JSON Converter</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={convertToJson} disabled={!excelFile}>
        Convert and Download JSON
      </button>
    </div>
  );
}

export default App;
