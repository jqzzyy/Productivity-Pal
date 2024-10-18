import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./Todo.css";
import NavBar from "../modules/NavBar";
import List from "../modules/List";

const Todo = (props) => {
    const [lists, setLists] = useState([]);

    const handleAddList = () => {
        setLists([...lists, { id: Date.now(), tasks: [] }]);
    }

    const handleRemoveList = (index) => {
        const newLists = lists.filter((_, i) => i !== index);
        setLists(newLists);
    }

    return (
        <div className="Todo-background">
            <NavBar />
            <div className="lists-container">
                <div className="lists-title">
                    <h2>My Lists</h2>
                </div>
                {lists.map((list, index) => (
                    <div key={list.id}>
                        <List initialTasks={list.tasks} />
                        <button className="removeButton" onClick={() => handleRemoveList(index)}>X</button>
                    </div>
                ))}
            </div>
            <button className="createButton" onClick={handleAddList}>Create a new List</button>
        </div>
    );
};

export default Todo;
