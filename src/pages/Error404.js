import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <h1 style={{ fontSize: "80px", fontWeight: "500", margin: 0 }}>404</h1>

        <div
          style={{
            height: "120px",
            width: "4px",
            backgroundColor: "#4ade80",
            borderRadius: "2px",
          }}
        ></div>

        <div style={{ maxWidth: "350px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "0 0 15px 0",
            }}
          >
            Page Not Found
          </h2>
          <p style={{ color: "#666", margin: "0 0 25px 0" }}>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "#4B6BFB",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
