import { useState } from "react";
import { processExcelFile } from "../utils/fileProcessor";
import { saveAs } from "file-saver";

const useFileConverter = () => {
  const [excelFile, setExcelFile] = useState(null);

  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  const convertToJsonAndDownload = () => {
    if (excelFile) {
      processExcelFile(excelFile, (json) => {
        const jsonBlob = new Blob([JSON.stringify(json, null, 2)], {
          type: "application/json",
        });
        saveAs(jsonBlob, "converted.json");
      });
    }
  };

  return {
    excelFile,
    handleFileChange,
    convertToJsonAndDownload,
  };
};

export default useFileConverter;
