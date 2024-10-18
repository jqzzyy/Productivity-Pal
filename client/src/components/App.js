import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Todo from "./pages/Todo.js";
import Calendar from "./pages/Calendar.js";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [user, setUser] = useState({});

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserId(user._id);
        setUser(user); // Save the user details
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);

    post("/api/login", { token: userToken })
      .then((user) => {
        setUserId(user._id);
        setUser(user); // Save the user details
        return post("/api/initsocket", { socketid: socket.id });
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUser({}); // Clear the user details
    post("/api/logout").catch((err) => {
      console.error("Logout failed:", err);
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h">
            <Skeleton
              path="/"
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              userId={userId}
            />
          </div>
        }
      />
      <Route
        path="/Todo"
        element={
          <Todo
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
          />
        }
      />
      <Route
        path="/Calendar"
        element={
          <Calendar
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            user={user} // Pass user details as props
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
