import GrayIcon from "assets/markers/gray-icon.svg";
import { NavLink } from "react-router-dom";
import s from "./SidebarTasks.module.css";
export const SidebarTasks = () => {
  return (
    <div className={s.main}>
      <ul>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <NavLink to={`/`}>Application Setup</NavLink>{" "}
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <NavLink to={`/`}>Static Books List</NavLink>{" "}
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <NavLink to={`/`}>Administration Panel</NavLink>{" "}
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <NavLink to={`/business-context`}>
            Connect Admin with Frontend
          </NavLink>{" "}
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <NavLink to={`/`}>Book Review Feature</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};
