import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./Skeleton.css";
import NavBar from "../modules/NavBar";
import Home from "../modules/Home";
import Timer from "../modules/Timer";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="homeScreen">
      <div className="backgroundContainer">
        <NavBar />
        <Home />
        <Timer />
      </div>
        <div className="aboutSection">
        <h2>About Productivity Pal</h2>
        <h3>Have too many things to remember? Too many apps to check and go through? 
          Instead of going through the hassle, Productivity Pal is an all-in-one service 
          that provides all the resources you need to stay productive! </h3> 
        </div>
      
    </div>
    


  );
};

export default Frontpage;
