import React from "react";

export const Button = (props) => {
  const { children, style, disabled, ...rest } = props;
  return (
    <button
      disabled={disabled}
      style={{
        padding: "10px 16px",
        backgroundColor: disabled ? "lightgrey" : "#4b6bfb",
        borderRadius: "6px",
        border: "none",

        color: "white",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
