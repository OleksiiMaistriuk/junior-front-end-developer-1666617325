import { BusinessContext } from "./businessContext/BusinessContext";
import { ContextTabs } from "./contextTabs/ContextTabs";
import s from "./MainContext.module.css";
export const MainContext = () => {
  return (
    <div className={s.main}>
      <ContextTabs />
      <BusinessContext />
    </div>
  );
};
