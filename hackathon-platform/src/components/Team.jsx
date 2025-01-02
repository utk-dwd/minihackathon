import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../firebaseConfig";

const Team = ({ user }) => {
  const [teamName, setTeamName] = useState("");
  const [isSolo, setIsSolo] = useState(false);
  const [message, setMessage] = useState("");

  const db = getFirestore(app);

  const handleCreateTeam = async () => {
    if (!teamName) {
      setMessage("Please enter a team name!");
      return;
    }

    try {
      const teamId = teamName.toLowerCase().replace(/\s+/g, "-");
      const teamRef = doc(db, "teams", teamId);

      await setDoc(teamRef, {
        teamName,
        members: [{ uid: user.uid, displayName: user.displayName }],
        createdAt: new Date().toISOString(),
      });

      setMessage("Team created successfully!");
    } catch (error) {
      console.error("Error creating team:", error);
      setMessage("Failed to create team. Try again!");
    }
  };

  const handleSoloParticipation = () => {
    setIsSolo(true);
    setMessage("You are participating solo!");
  };

  const handleRandomTeam = () => {
    setMessage("Feature coming soon: Join a random team!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Team Options</h1>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Enter Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          style={{ padding: "10px", width: "80%", fontSize: "16px" }}
        />
        <button onClick={handleCreateTeam} style={{ marginLeft: "10px", padding: "10px" }}>
          Create Team
        </button>
      </div>
      <div>
        <button onClick={handleSoloParticipation} style={{ margin: "10px", padding: "10px" }}>
          Participate Solo
        </button>
        <button onClick={handleRandomTeam} style={{ margin: "10px", padding: "10px" }}>
          Join Random Team
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Team;
