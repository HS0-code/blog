import { Link } from "react-router-dom";

export const SignIn = () => {
  const showValues = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log(email, password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{ border: "1px solid black", padding: "20px", width: "300px" }}
      >
        <h1>Sign In</h1>

        <input id="email" placeholder="Email" />
        <br />
        <br />

        <input id="password" type="password" placeholder="Password" />
        <br />
        <br />

        <button
          onClick={showValues}
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        <p>
          Do not have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
