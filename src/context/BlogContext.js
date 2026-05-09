import { onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { blogsCollection } from "../firebase/Firebase";
const BlogContext = createContext();
export const BlogContextProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useEffect(() => {
    const getLiveUpdates = onSnapshot(blogsCollection, (collectionSnapshot) => {
      const blogsData = collectionSnapshot.docs.map((blogDoc) => ({
        blogId: blogDoc.id,
        ...blogDoc.data(),
      }));
      setBlogs(blogsData);
      setBlogsLoading(false);
    });
    return () => getLiveUpdates();
  }, []);
  return (
    <BlogContext.Provider value={{ blogs, blogsLoading }}>
      {children}
    </BlogContext.Provider>
  );
};
export const useBlogContext = () => {
  return useContext(BlogContext);
};
