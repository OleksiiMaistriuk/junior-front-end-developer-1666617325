import { SprintsMessage } from "./message/SprintsMessage";
import { Sprints } from "./sprints/Sprints";
import s from "./BusinessContext.module.css";
export const BusinessContext = () => {
  return (
    <div className={s.main}>
      <Sprints />
      <SprintsMessage />
    </div>
  );
};
