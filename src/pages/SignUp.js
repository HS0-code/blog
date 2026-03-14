export const SignUp = () => {
  const showValues = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields before signing up.");
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
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
        <h1>Sign Up</h1>

        <input id="firstName" placeholder="First Name" />
        <br />
        <br />

        <input id="lastName" placeholder="Last Name" />
        <br />
        <br />

        <input id="email" placeholder="Email" />
        <br />
        <br />

        <input id="password" type="password" placeholder="Password" />
        <br />
        <br />

        <button
          onClick={showValues}
          style={{ backgroundColor: "blue", color: "white", width: "100%" }}
        >
          Sign Up
        </button>

        <p>Already have an account?</p>
      </div>
    </div>
  );
};
