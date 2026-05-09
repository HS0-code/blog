import React from "react";
import { useBlogContext } from "../context/BlogContext";

export const TrendingImage = ({ onClick }) => {
  const { blogs } = useBlogContext();

  const trendingBlogs = blogs
    ? [...blogs]
        .sort(
          (a, b) =>
            (b.createdAt?.toDate?.() || 0) - (a.createdAt?.toDate?.() || 0),
        )
        .slice(0, 4)
    : [];

  return (
    <div style={{ marginTop: "auto", padding: "40px 0" }}>
      <h2
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "24px",
          fontFamily: "sans-serif",
        }}
      >
        Trending
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {trendingBlogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              position: "relative",
              width: "250px",
              height: "320px",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "12px",
            }}
            onClick={() => onClick(blog)}
          >
            <img
              src={blog.imageURL || "/Rectangle 38.png"}
              alt="Trending"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              }}
            >
              <div
                style={{
                  backgroundColor: "#4B6BFB",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "sans-serif",
                }}
              >
                {blog.tag || "Technology"}
              </div>

              <h4
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  fontFamily: "sans-serif",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                }}
              >
                {blog.title?.length > 45
                  ? `${blog.title.substring(0, 45)}...`
                  : blog.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
