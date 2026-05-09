import React from "react";
import { useNavigate } from "react-router-dom";
export const BlogCard = (props) => {
  const { blog } = props;
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: 340,
        height: 460,
        padding: 20,
        borderRadius: 12,
        border: "1px solid #E8E8EA",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/blogs/${blog.blogId}`)}
    >
      <div
        style={{
          height: 240,
          width: 340,
          border: "1px solid #E8E8EA",
          borderRadius: 6,
          backgroundImage: `url(${
            blog.imageURL || "https://picsum.photos/seed/picsum/536/354"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingTop: 20,
        }}
      >
        <div>
          <span
            style={{
              border: "1px solid lightgrey",
              color: blog.tag.color,
              padding: 6,
              borderRadius: 4,
              fontSize: 20,
            }}
          >
            {blog.tag}
          </span>
        </div>
        <h2 style={{ overflow: "hidden", height: "60px" }}>{blog.title}</h2>
        <span
          style={{
            color: "#97989F",
            fontSize: 16,
          }}
        >
          {blog.createdAt &&
            blog.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </span>
      </div>
    </div>
  );
};
