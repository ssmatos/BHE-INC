import React from "react";
import homeLogo from "../Images/Metroid.png";

function Home() {
  return (
    <div className="container-home text-center">
      <img className="logo-home" src={homeLogo} alt="homeLogo"></img>

      <div className="text-container">
        <h1>All your bounty-hunting needs</h1>
        <h1>All in one place</h1>
      </div>

      <div className="text-container">
        <h2>From Laser Blasters to Super Missiles</h2>
        <h3>You want it? We got it.</h3>
      </div>

      <div className="button-container">
        <h4>Check out our explosive catalog:</h4>
        <a type="button" className="btn btn-success btn-lg m-3" href="/armoury">
          Explore
        </a>
      </div>
    </div>
  );
}

export default Home;
