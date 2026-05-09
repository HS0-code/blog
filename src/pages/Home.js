import { useUserContext } from "../context/UserContext";
import { Header } from "../components/Header";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SlideCard } from "../components/SlideCard";
import { useBlogContext } from "../context/BlogContext";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { TrendingImage } from "../components/TrendingImage";
import { BlogPostCard } from "../components/BlogPostCard";
import { Tags } from "../components/Tags";

const AuthMessage = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h3>Please sign in or sign up to access the details.</h3>
    <p>Join us to explore more amazing content!</p>
  </div>
);

export const Home = () => {
  const { user, loading } = useUserContext();
  const { blogs, blogsLoading } = useBlogContext();
  const [slideCount, setSlideCount] = useState(0);
  const [showAuthScreen, setShowAuthScreen] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  if (loading || blogsLoading) return <p>Loading...</p>;
  if (showAuthScreen) return <AuthMessage />;

  const handleTrendingClick = () => {
    if (!user) setShowAuthScreen(true);
    else console.log("Navigate to trending blog details");
  };

  const filteredBlogs = blogs?.filter((blog) => {
    if (activeTag === "All") return true;
    return blog.tag?.toLowerCase() === activeTag.toLowerCase();
  });

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          minWidth: "800px",
          minHeight: "calc(100vh - 400px)",
          padding: "0 20px",
        }}
      >
        <Header />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 20,
            margin: "50px 0px",
          }}
        >
          {blogs && blogs.length > 0 ? (
            <SlideCard blog={blogs[slideCount]} />
          ) : (
            <p>No blogs available.</p>
          )}

          <div>
            <IconButton
              onClick={() => setSlideCount((prev) => prev - 1)}
              disabled={slideCount <= 0}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={() => setSlideCount((prev) => prev + 1)}
              disabled={!blogs || slideCount >= blogs.length - 1}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>

        <TrendingImage onClick={handleTrendingClick} />

        <div style={{ padding: "60px 0" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "15px",
              fontFamily: "sans-serif",
            }}
          >
            All Blog Posts
          </h2>

          <Tags activeTag={activeTag} setActiveTag={setActiveTag} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {filteredBlogs &&
              filteredBlogs.map((blog) => (
                <BlogPostCard key={blog.id} blog={blog} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
