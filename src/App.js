import React from "react";
import FileUpload from "./components/FileUpload";
import ConvertButton from "./components/ConvertButton";
import Footer from "./components/Footer";
import useFileConverter from "./hooks/useFileConverter";

function App() {
  const { excelFile, handleFileChange, convertToJsonAndDownload } =
    useFileConverter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Excel to JSON Converter
        </h1>
        <FileUpload onFileChange={handleFileChange} />
        <ConvertButton
          onConvert={convertToJsonAndDownload}
          disabled={!excelFile}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
