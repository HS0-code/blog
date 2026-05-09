import { Box, Modal } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
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

export const DeleteBlogModal = (props) => {
  const { open, handleClose, blog } = props;

  const navigate = useNavigate();

  const handleDelete = async () => {
    const blogRef = doc(blogsCollection, blog.blogId);
    await deleteDoc(blogRef);

    navigate("/blogs");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div>
          <div>Are you sure you want to delete the blog?</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
