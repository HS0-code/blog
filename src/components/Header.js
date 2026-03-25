import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "./TextField";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 80px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="logo.png" alt="logopng"></img>
        <h2 style={{ margin: 0, fontSize: "20px" }}>MetaBlog</h2>
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/" style={{ color: "#4B5563", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/blog" style={{ color: "#4B5563", textDecoration: "none" }}>
          Blog
        </Link>
        <Link
          to="/contact"
          style={{ color: "#4B5563", textDecoration: "none" }}
        >
          Contact
        </Link>
      </div>

      <div style={{ width: "160px" }}>
        <TextField placeholder="Search" />
      </div>
    </div>
  );
};
