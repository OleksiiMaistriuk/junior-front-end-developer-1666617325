import GrayIcon from "assets/markers/gray-icon.svg";
import GreenIcon from "assets/markers/green-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./SidebarTasks.module.css";
export const SidebarTasks = () => {
  const [status, setStatus] = useState(0);

  const biggestStatus = (prev) => {
    if (status < prev) {
      setStatus(prev);
      console.log("prevStatus", status);
    }
  };
  return (
    <div className={s.main}>
      <ul>
        <li className={s.task}>
          <img src={GreenIcon} alt="" />
          <NavLink onClick={() => biggestStatus(1)} className={s.link} to={`/`}>
            Application Setup
          </NavLink>
        </li>
        <li className={s.task}>
          <img src={status >= 1 ? GreenIcon : GrayIcon} alt="" />
          <NavLink
            onClick={() => biggestStatus(2)}
            className={status >= 1 ? s.link : s.notActive}
            to={`/`}
          >
            Static Books List
          </NavLink>
        </li>
        <li className={s.task}>
          <img src={status >= 2 ? GreenIcon : GrayIcon} alt="" />
          <NavLink
            onClick={() => biggestStatus(3)}
            className={status >= 2 ? s.link : s.notActive}
            to={`/`}
          >
            Administration Panel
          </NavLink>
        </li>
        <li className={s.task}>
          <img src={status >= 3 ? GreenIcon : GrayIcon} alt="" />
          <NavLink
            onClick={() => biggestStatus(4)}
            className={status >= 3 ? s.link : s.notActive}
            to={`/business-context`}
          >
            Connect Admin with Frontend
          </NavLink>
        </li>
        <li className={s.task}>
          <img src={status >= 4 ? GreenIcon : GrayIcon} alt="" />
          <NavLink className={status >= 4 ? s.link : s.notActive} to={`/`}>
            Book Review Feature
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
