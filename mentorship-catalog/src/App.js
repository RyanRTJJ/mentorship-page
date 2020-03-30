import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./components/profile-card";

function App() {
  return (
    <div className="profile-cards">
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default App;
