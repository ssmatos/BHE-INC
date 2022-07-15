import React from "react";
import Samus from "../Images/Samus.jpeg";

function About() {
  return (
    <div className="container-about text-center">
      <div className="row d-flex justify-content-center">
        <div className="col m-5">
          <h1 className="mt-5">OUR STORY</h1>
          <p className="fs-3 fw-normal lh-lg m-5">
            After continuously losing all of her gear in countless missions
            accross the galaxy, our CEO, Samus Aran, decided she'd find a way to
            allow all bounty hunters to have access to any equipment necessary
            for the completion of their assignment, and getting you closer to
            that next paycheck.
          </p>
        </div>
        <div className="col">
          <img src={Samus} alt="Samus.jepg" className="image-samus" />
        </div>
      </div>
    </div>
  );
}

export default About;
