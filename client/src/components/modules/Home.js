import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [note, setNote] = useState("");
    const [save, saveNote] = useState("");
    const handleReset = () => {
        setNote(""); 
    };

    return (
        <div className="Home-wrapper">
        <div className="title">
            <h1>Welcome to Productivity Pal!</h1>
        </div>
        <div className="Home-dailynote">
            <h3>What's on your mind today?</h3>
            <textarea
            className="Inputs"
            value={note}
            onChange={(e) => setNote(e.target.value)} 
            ></textarea>
        </div>
        <div className="btn-wrapper">
        <button className="reset-btn" onClick={handleReset}>Clear</button>
        </div> 
    </div>
  );
};

export default Home;
