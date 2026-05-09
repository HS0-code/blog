import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { useBlogContext } from "../context/BlogContext";
import { UpdateBlogModal } from "../components/UpdateBlogModal";
import { DeleteBlogModal } from "../components/DeleteBlogModal";
import { useUserContext } from "../context/UserContext";

export const BlogPage = () => {
  const { id } = useParams();
  const { blogs, blogsLoading } = useBlogContext();

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const { currentUser } = useUserContext();

  const singleBlog = blogs.find((blog) => blog.blogId === id);

  if (blogsLoading) return <div>Loading...</div>;
  if (!blogsLoading && !singleBlog) return null;

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

      <div
        style={{
          maxWidth: "800px",
          minWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginBottom: "100px",
        }}
      >
        <h1 style={{ margin: "40px 0px", wordWrap: "break-word" }}>
          {singleBlog.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <p>
            {singleBlog.createdAt &&
              singleBlog.createdAt.toDate().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
        </div>

        <img
          src={
            singleBlog.imageURL || "https://picsum.photos/seed/picsum/536/354"
          }
          width={800}
          alt={singleBlog.title}
        />

        <p style={{ marginTop: "40px" }}>{singleBlog.content}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button
            style={{ width: "128px" }}
            onClick={handleOpenUpdate}
            disabled={singleBlog.userId !== currentUser?.uid}
          >
            Update
          </Button>
          <Button
            style={{ width: "128px" }}
            onClick={handleOpenDelete}
            disabled={singleBlog.userId !== currentUser?.uid}
          >
            Delete
          </Button>
        </div>

        <UpdateBlogModal
          open={openUpdate}
          handleClose={handleCloseUpdate}
          blog={singleBlog}
        />

        <DeleteBlogModal
          open={openDelete}
          handleClose={handleCloseDelete}
          blog={singleBlog}
        />
      </div>
    </div>
  );
};
