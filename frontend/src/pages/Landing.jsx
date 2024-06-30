// WelcomePage.js

import React from "react";
import "./landing.css"; // Ensure this CSS file exists
import { Link } from "react-router-dom";

const Landing = () => {
  const backgroundImage = "./Livestock-Veterinarian.jpg"; // Assuming image in the same directory

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">
        WELCOME TO FARM VET CONNECT
        <br />
        WHERE FARMERS MEET VETERINARY DOCTORS
        <br />
        AND ENHANCE THEIR FARMING SKILLS
        <br />
        <div>
          <Link to="/signin">
            <button>LOGIN</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to="/signup">
            <button>REGISTER</button>
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default Landing;

/* // WelcomePage.js

import React from 'react';
import './welcome.css'; // Create this CSS file to style your component

const Welcome = () => {
  const backgroundImageUrl = 'E:\health\client\lv1.jfif'; // Adjust the path to your actual image

  return (
    <div
      className="welcome-container"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="welcome-text">
        WELCOME TO FARM VET CONNECT
        <br />
        WHERE FARMERS MEET VETERINARY DOCTORS
        <br />
        AND ENHANCE THEIR FARMING SKILLS
      </h1>
    </div>
  );
};

export default Welcome;
 */
