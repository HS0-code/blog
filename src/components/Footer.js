import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f5", padding: "40px 80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <h3 style={{ margin: "0 0 20px 0" }}>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p style={{ margin: "20px 0 5px 0" }}>
            <b>Email :</b> info@jstemplate.net
          </p>
          <p style={{ margin: 0 }}>
            <b>Phone :</b> 880 123 456 789
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
            Blog
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src="facebook.png"
            alt="facebookpng"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src="twitter.png"
            alt="twitterpng"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src="instagram.png"
            alt="instagrampng"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src="linkedin.png"
            alt="linkedinpng"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="logo.png" alt="logopng"></img>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>MetaBlog</div>
            <div style={{ fontSize: "12px" }}>© All Rights Reserved.</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "14px", color: "black" }}
          >
            Terms of Use
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "14px", color: "black" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "14px", color: "black" }}
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
