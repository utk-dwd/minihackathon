import React, { useState } from "react";
import Login from "./components/Login";
import Team from "./components/Team";

const App = () => {
  const [user, setUser] = useState(null); // Store user information in state

  // Function to handle login success
  const handleLoginSuccess = (userInfo) => {
    setUser(userInfo); // Update the user state with the logged-in user's info
  };

  return (
    <div>
      {/* If no user, show Login, otherwise show Team page */}
      {!user ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Team user={user} />  // Pass the user prop to the Team component
      )}
    </div>
  );
};

export default App;
