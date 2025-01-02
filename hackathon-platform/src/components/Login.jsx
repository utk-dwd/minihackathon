import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebaseConfig";

const Login = ({ onLoginSuccess }) => {
  const [message, setMessage] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      onLoginSuccess(user); // This will pass user data back to the parent component (App.jsx)
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Login Failed. Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login to Participate in the Hackathon</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login with Google
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
