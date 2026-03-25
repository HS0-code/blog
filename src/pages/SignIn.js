import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { signInFunction } from "../firebase/Firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await signInFunction(email, password);

      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Sign In Error:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h1>Sign In</h1>

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSubmit}>Sign In</Button>

        <p style={{ fontSize: "14px" }}>
          Do not have an account?{" "}
          <Link to="/sign-up" style={{ textDecoration: "none", color: "blue" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
