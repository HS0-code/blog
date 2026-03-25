import React, { useState } from "react";
import { TextField } from "../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { signUpFunction } from "../firebase/Firebase";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("All 4 fields are required!");
      return;
    }

    try {
      await signUpFunction(firstName, lastName, email, password);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error(error);
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
      <form
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
        <h1>Sign Up</h1>

        <TextField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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

        <Button onClick={handleSubmit}>Sign Up</Button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
