import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full sm:max-w-md">
      {children}
    </div>
  );
};

export default Card;
