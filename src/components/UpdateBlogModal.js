import React, { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { blogsCollection } from "../firebase/Firebase";
import { Button } from "./Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const UpdateBlogModal = (props) => {
  const { open, handleClose, blog } = props;

  const [blogData, setBlogData] = useState({ ...blog });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.content ||
      !blogData.tag
    ) {
      alert("Please fill out all the fields");
      return;
    }

    const blogRef = doc(blogsCollection, blogData.blogId);

    await setDoc(blogRef, {
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
      createdAt: blogData.createdAt,
      updatedAt: serverTimestamp(),
      tag: blogData.tag,
    });

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3>Update Blog</h3>
        <TextField
          type="text"
          name="title"
          placeholder="Title..."
          value={blogData.title}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="description"
          placeholder="Description..."
          value={blogData.description}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="content"
          placeholder="Content..."
          value={blogData.content}
          onChange={handleChange}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </Box>
      </Box>
    </Modal>
  );
};
