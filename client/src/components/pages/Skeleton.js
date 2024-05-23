import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./Skeleton.css";
import NavBar from "../modules/NavBar";
import Home from "../modules/Home";
import Timer from "../modules/Timer";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "406131015562-o2ju70gmh1or2ssjj2eu156jifctnqh7.apps.googleusercontent.com";

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
    

    
    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    //   {userId ? (
    //     <button
    //       onClick={() => {
    //         googleLogout();
    //         handleLogout();
    //       }}
    //     >
    //       Logout
    //     </button>
    //   ) : (
    //     <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
    //   )}
      

    // </GoogleOAuthProvider>
  );
};

export default Skeleton;
