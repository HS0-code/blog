import { useState } from "react";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { sendMessage } from "../firebase/Firebase";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await sendMessage(name, email, subject, message);
      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />
      <div
        style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}
      >
        <h1>Contact Us</h1>
        <p style={{ color: "#666", marginBottom: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
          <div
            style={{
              flex: 1,
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
            }}
          >
            <h3>Address</h3>
            <p style={{ color: "#666" }}>
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
            }}
          >
            <h3>Contact</h3>
            <p style={{ color: "#666", margin: 0 }}>313-332-8662</p>
            <p style={{ color: "#666", margin: 0 }}>info@email.com</p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f4f4f5",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Leave a message</h3>

          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <TextField
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <TextField
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <TextField
              placeholder="Write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div style={{ width: "160px" }}>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
