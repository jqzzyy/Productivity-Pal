import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const initialTime = 25 * 60; 
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleIncrease = () => {
    setTime((prevTime) => prevTime + 60 * 5);
  };

  const handleDecrease = () => {
    setTime((prevTime) => (prevTime >= 60 ? prevTime - 60 * 5: 0));
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  useEffect(() => {
    if (time === 0 && isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }, [time, isRunning, intervalId]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="Timer-wrapper">
      <div className="Timer-title">Pomodoro Timer</div>
      <div className="clock">{formatTime(time)}</div>
      <div className="button-group">
        <button onClick={handleIncrease}>+5 Minutes</button>
        <button onClick={handleDecrease}>-5 Minutes</button>
      </div>
      <div className="button-group">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
