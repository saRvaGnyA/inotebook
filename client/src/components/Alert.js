import React from "react";

const Alert = ({ props }) => {
  return (
    <div className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4">
      {props.message}
    </div>
  );
};

export default Alert;
