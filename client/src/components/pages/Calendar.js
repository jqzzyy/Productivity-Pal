import React from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./Todo.css";
import NavBar from "../modules/NavBar";

const Calendar = (props) => {
    return (
        <div className="Calendar-container">
            <NavBar />
        </div>
    );
};

export default Calendar;