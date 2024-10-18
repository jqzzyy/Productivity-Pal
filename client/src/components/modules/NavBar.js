import React from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./NavBar.css";

const NavBar = (props) => {
    
    return (
        <>
        <div className="NavBar-container">
            <div className="NavBar-title">Productivity Pal
            <Link to="/" className="NavBar-link">
                Home
            </Link>
            <Link to="/Calendar" className="NavBar-link">
                Go to Calendar
            </Link>
            <Link to="/Todo" className="NavBar-link" component>
                To-do list
            </Link>
                </div> 
            </div>
        </>
    );
};

export default NavBar;