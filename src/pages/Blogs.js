import React, { useState } from "react";
import { Button } from "../components/Button";
import { BlogCard } from "../components/BlogCard";
import { CreateBlogModal } from "../components/CreateBlogModal";
import { useBlogContext } from "../context/BlogContext";
import { Header } from "../components/Header";
import { useUserContext } from "../context/UserContext";
export const BlogsPage = () => {
  const [openBlog, setOpenBlog] = useState(false);
  const handleOpenBlog = () => setOpenBlog(true);
  const handleCloseBlog = () => setOpenBlog(false);
  const { blogs, blogsLoading } = useBlogContext();
  const { loading } = useUserContext();

  if (loading || blogsLoading) return <p>Loading...</p>;
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div>
        <Button onClick={handleOpenBlog}>Create Blog</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          marginTop: 20,
        }}
      >
        {blogs.map((blog, key) => (
          <div key={key}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <CreateBlogModal open={openBlog} handleClose={handleCloseBlog} />
    </div>
  );
};
