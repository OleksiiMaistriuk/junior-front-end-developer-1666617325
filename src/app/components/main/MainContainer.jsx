import Avatar from "assets/avatars/Frame.svg";
import Logo from "assets/Logo.svg";
import { Sidebar } from "./sidebar/Sidebar";
import { Tabs } from "./tabs/Tabs";

export const MainContainer = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
        <img src={Avatar} alt="Avatar" />
      </div>
      <Sidebar />
      <Tabs />
      <div>
        <ul>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>Copyright</li>
        </ul>
        <ul>
          <li>nerds.family Version 1.2</li>
          <li>Last update 10/09/2022</li>
        </ul>
      </div>
    </div>
  );
};
