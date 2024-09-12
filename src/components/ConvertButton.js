import React from "react";

const ConvertButton = ({ onConvert, disabled }) => {
  return (
    <button
      onClick={onConvert}
      disabled={disabled}
      className={`w-full py-2 rounded-lg font-semibold text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      Convert and Download JSON
    </button>
  );
};

export default ConvertButton;
