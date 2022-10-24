import Avatar from "assets/avatars/Frame.svg";
import Logo from "assets/Logo.svg";
import { MainContext } from "./context/MainContext";
import s from "./MainContainer.module.css";
import { Sidebar } from "./sidebar/Sidebar";

export const MainContainer = () => {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <img src={Logo} className={s.logo} alt="Logo" />
        <span className={s.avatar}>
          {" "}
          <img src={Avatar} alt="Avatar" />
        </span>
      </div>
      <div className={s.content}>
        <Sidebar />
        <MainContext />
      </div>

      <div className={s.footer}>
        <ul>
          <li>Terms of service </li>
          <li>• </li>
          <li>Privacy policy</li>
          <li>•</li>
          <li>Copyright</li>
        </ul>
        <ul>
          <li>nerds.family Version 1.2</li>
          <li>•</li>
          <li>Last update 10/09/2022</li>
        </ul>
      </div>
    </div>
  );
};
