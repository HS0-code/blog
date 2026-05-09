import React from "react";

export const BlogPostCard = ({ blog }) => (
  <div
    style={{
      border: "1px solid #E8E8EA",
      borderRadius: "12px",
      padding: "16px",
      width: "280px",
      fontFamily: "sans-serif",
    }}
  >
    <img
      src={blog.imageURL || "/Rectangle 38.png"}
      alt="Blog post"
      style={{
        width: "100%",
        height: "160px",
        objectFit: "cover",
        borderRadius: "6px",
      }}
    />
    <div
      style={{
        color: "#4B6BFB",
        backgroundColor: "rgba(75, 107, 251, 0.05)",
        padding: "4px 10px",
        borderRadius: "6px",
        display: "inline-block",
        margin: "16px 0",
        fontSize: "12px",
        fontWeight: "500",
      }}
    >
      {/* Uses your actual tag from Firebase */}
      {blog.tag}
    </div>
    <h3
      style={{
        fontSize: "18px",
        margin: "0 0 12px 0",
        lineHeight: "1.4",
        fontWeight: "600",
      }}
    >
      {blog.title}
    </h3>
    <p style={{ color: "#97989F", fontSize: "14px", margin: 0 }}>
      {blog.createdAt?.toDate
        ? blog.createdAt.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "December 23, 2024"}
    </p>
  </div>
);
