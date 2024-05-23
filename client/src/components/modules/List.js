import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import "./List.css";

const List = (props) => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        setTasks([...tasks, { checked: false, text: "", urgent: null }]);
    }

    const handleCheckboxChange = (index) => (event) => {
        const newTasks = [...tasks];
        newTasks[index].checked = event.target.checked;
        setTasks(newTasks);
    }

    const handleTextChange = (index) => (event) => {
        const newTasks = [...tasks];
        newTasks[index].text = event.target.value;
        setTasks(newTasks);
    }

    const handleUrgentChange = (index, urgency) => () => {
        const newTasks = [...tasks];
        newTasks[index].urgent = urgency;
        setTasks(newTasks);
    }

    const handleRemoveTask = (index) => () => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className="list-container">
            <div className="tasks-container">
                {tasks.map((task, index) => (
                    <div key={index} className="input-container">
                        <div className="urgent-buttons">
                            <button className="urgent-btn" onClick={handleUrgentChange(index, true)}>Urgent</button>
                            <button className="noturgent-btn" onClick={handleUrgentChange(index, false)}>Not Urgent</button>
                        </div>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={task.checked}
                            onChange={handleCheckboxChange(index)}
                        />
                        <input
                            type="text"
                            className="textInput"
                            value={task.text}
                            onChange={handleTextChange(index)}
                        />
                        <div className="button-container">
                            <div className="urgent-buttons">
                                <button className="removeTask-btn" onClick={handleRemoveTask(index)}>X</button>
                            </div>
                            <div className="urgency-status">{task.urgent === null ? "" : task.urgent ? "Urgent" : "Not Urgent"}</div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="newTask">
                <button className="addTask-btn" onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default List;
