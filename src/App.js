import React from "react";
import FileUpload from "./components/FileUpload";
import ConvertButton from "./components/ConvertButton";
import Footer from "./components/Footer";
import useFileConverter from "./hooks/useFileConverter";
import Card from "./components/Card";

function App() {
  const { excelFile, handleFileChange, convertToJsonAndDownload } =
    useFileConverter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card>
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Excel to JSON Converter
        </h1>
        <FileUpload onFileChange={handleFileChange} />
        <ConvertButton
          onConvert={convertToJsonAndDownload}
          disabled={!excelFile}
        />
      </Card>

      {/* Future cards can be added here */}
      <Footer />
    </div>
  );
}

export default App;
