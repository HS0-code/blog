import React from "react";
import { useNavigate } from "react-router-dom";

export const SlideCard = (props) => {
  const { blog } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blog.blogId}`);
  };

  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onClick={handleClick}
    >
      <div
        style={{
          backgroundImage: `url(https://picsum.photos/seed/picsum/536/354)`,
          borderRadius: "12px",
          width: 1200,
          height: 600,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(80%)",
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          left: "25px",
          bottom: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "520px",
          height: "170px",
          position: "absolute",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "rgb(75, 107, 251)",
              borderRadius: "6px",
              padding: "4px 10px",
              color: "white",
            }}
          >
            {blog.tag}
          </span>
        </div>

        <div style={{ height: "100px", overflow: "hidden" }}>
          <h2
            style={{
              fontSize: "36px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {blog.title}
          </h2>
        </div>

        <div>
          {blog.createdAt &&
            blog.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </div>
      </div>
    </div>
  );
};
