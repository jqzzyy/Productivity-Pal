import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "../../utilities.css";
import "./Todo.css";
import NavBar from "../modules/NavBar";

const GOOGLE_CLIENT_ID = "406131015562-o2ju70gmh1or2ssjj2eu156jifctnqh7.apps.googleusercontent.com";

const Calendar = ({ userId, user, handleLogin, handleLogout }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    handleLogin(credentialResponse);
    setIsCalendarVisible(true);
  };

  return (
    <div className="Calendar-container">
      <NavBar />
      <div className="gAuth">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          {userId ? (
            <div>
              <button
                onClick={() => {
                  googleLogout();
                  handleLogout();
                  setIsCalendarVisible(false);
                }}
              >
                Logout
              </button>
              <div className="user-info">
                <p className="info-text">Welcome, {user.name}!</p>
              </div>
            </div>
          ) : (
            <GoogleLogin onSuccess={handleLoginSuccess} onError={(err) => console.log(err)} />
          )}
        </GoogleOAuthProvider>
      </div>
      {isCalendarVisible && (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTz=0&src=amFzbWluZWw1MDAyQGdtYWlsLmNvbQ&src=YTdkYWU3YjRlZjdmNmIzNzQxNDY0MTM0YjY4MTE1N2ZhZjNkZTJlNmY1NTRhNmJjNTgxODRhODhlNDY1MTRmNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTM4ZDJjNmQ5OWYwMjMzOTYxMzI4YmMzMzZjMTQ0MzZhYjlhOGIyMGZmNzBmMTIxM2ZjMTYwMzBjOGI5YjU1ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZWIwMjZlMWEwNTEwNDEyYzFiNWE5YjRhZDgwZDQzYWNiMjA1NDExMTVkZjZkYmIxMDViNzg5YjQ5MTAxYzljYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NjYyMTk1MDEzNWFmMzRiYmM5MjBjNjU4ODA2NTI3NTAyNmQxMWMyMzlmMjZlNzdiZDJjZTQxNDVlN2I4OGQ4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTExMDUwNzA3NDAzODA3MzIxMTA2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%2311c293&color=%233F51B5&color=%23F4511E&color=%23F6BF26&color=%234a148c&color=%237986CB"
            style={{ border: "solid 1px #777" }}
            width="1200"
            height="800"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Calendar;
