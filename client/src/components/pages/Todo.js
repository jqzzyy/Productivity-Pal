import React from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./Todo.css";
import NavBar from "../modules/NavBar";

const Todo = (props) => {
/*    const [makeList, setMakeList] = useState("");

    const handleButtonClick = (type) => {
        setMakeList(list)
    } */

    return (
        <div className="Todo-background">
            <NavBar />
            <button className="createButton">Create a new List</button>
        </div>
    )
}

export default Todo;