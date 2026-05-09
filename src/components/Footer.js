import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f5", padding: "64px 180px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "64px",
        }}
      >
        <div style={{ maxWidth: "280px" }}>
          <h3
            style={{ margin: "0 0 12px 0", fontSize: "18px", color: "#181A2A" }}
          >
            About
          </h3>
          <p style={{ color: "#696A75", lineHeight: "24px", fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div
            style={{ marginTop: "24px", color: "#181A2A", fontSize: "16px" }}
          >
            <p style={{ margin: "0 0 4px 0" }}>
              <b>Email :</b> info@jstemplate.net
            </p>
            <p style={{ margin: 0 }}>
              <b>Phone :</b> 880 123 456 789
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#3B3C4A" }}>
            Home
          </Link>
          <Link
            to="/blogs"
            style={{ textDecoration: "none", color: "#3B3C4A" }}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#3B3C4A" }}
          >
            Contact
          </Link>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src="facebook.png"
            alt="fb"
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src="twitter.png"
            alt="tw"
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src="instagram.png"
            alt="ig"
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src="linkedin.png"
            alt="in"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #DCDDDF",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="logo.png"
            alt="logo"
            style={{ width: "32px", height: "32px" }}
          />
          <div>
            <div style={{ fontSize: "18px", color: "#181A2A" }}>
              Meta<span style={{ fontWeight: "bold" }}>Blog</span>
            </div>
            <div style={{ fontSize: "14px", color: "#696A75" }}>
              © All Rights Reserved.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              color: "#3B3C4A",
            }}
          >
            Terms of Service
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              color: "#3B3C4A",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              color: "#3B3C4A",
            }}
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
