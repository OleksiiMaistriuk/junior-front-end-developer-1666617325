import GrayIcon from "assets/markers/gray-icon.svg";
import s from "./SidebarTasks.module.css";
export const SidebarTasks = () => {
  return (
    <div className={s.main}>
      <ul>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <p>Application Setup</p>
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <p>Application Setup</p>
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <p>Application Setup</p>
        </li>
        <li className={s.task}>
          <img src={GrayIcon} alt="" />
          <p>Application Setup</p>
        </li>
      </ul>
    </div>
  );
};
