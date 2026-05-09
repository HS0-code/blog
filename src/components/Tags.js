import React from "react";

export const Tags = ({ activeTag, setActiveTag }) => {
  const tags = ["All", "Art", "Technology"];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        fontFamily: "sans-serif",
      }}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          onClick={() => setActiveTag(tag)}
          style={{
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: activeTag === tag ? "bold" : "normal",
            color: activeTag === tag ? "#181A2A" : "#666",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
