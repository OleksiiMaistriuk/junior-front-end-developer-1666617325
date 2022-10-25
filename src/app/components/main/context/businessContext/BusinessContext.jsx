import s from "./BusinessContext.module.css";
import { SprintMessage } from "./message/SprintMessage";
import { Sprints } from "./sprints/Sprints";
export const BusinessContext = () => {
  return (
    <div className={s.main}>
      <Sprints />
      <SprintMessage />
    </div>
  );
};
