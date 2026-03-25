import React from "react";

export const TextField = (props) => {
  return (
    <input
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        width: "calc(100% - 20px)",
      }}
      {...props}
    />
  );
};
