import Compass from "assets/compass.svg";
import s from "./ContextTabs.module.css";

export const ContextTabs = () => {
  return (
    <div className={s.main}>
      <img src={Compass} alt="" />
      <h2>BUSINESS CONTEXT</h2>
    </div>
  );
};
