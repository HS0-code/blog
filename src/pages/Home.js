import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Homepage</h1>

        <Link to="/sign-up">Go to Sign Up</Link>
      </div>
    </div>
  );
};
