import React, { useContext, useEffect, useState } from "react";

import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Countdown from "react-countdown";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [time, setTime] = useState(
    +localStorage.getItem("time") || 1000 * 60 * 60 * 2
  );
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("time");
    auth.logOut();
    history.push("/");
  };

  useEffect(() => {
    localStorage.setItem("time", time);
    setTime(+localStorage.getItem("time"));
  }, [time]);

  return (
    <nav>
      <div
        className="nav-wrapper purple darken-3"
        style={{ padding: "0 2rem" }}
      >
        <span className="brand-logo">Exam</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/*<li>*/}
          {/*  <NavLink to="/create">Create</NavLink>*/}
          {/*</li>*/}
          <li>
            <NavLink to="/exam">Questions</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              LogOut
            </a>
          </li>

          <li>
            <Countdown
              className={
                time < 30000
                  ? "anim animate__animated animate__heartBeat "
                  : time < 10000
                  ? "anim animate__animated animate__tada"
                  : ""
              }
              date={Date.now() + time}
              onTick={() => setTime(time - 1000)}
              onComplete={() => {}}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
