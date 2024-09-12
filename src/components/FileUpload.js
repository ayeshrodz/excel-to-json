import React from "react";

const FileUpload = ({ onFileChange }) => {
  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={onFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
      />
    </div>
  );
};

export default FileUpload;
