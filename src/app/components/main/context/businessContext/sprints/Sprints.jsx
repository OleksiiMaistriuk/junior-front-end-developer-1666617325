import { useState } from "react";
import s from "./Sprints.module.css";
export const Sprints = () => {
  const [selected, setSelected] = useState(true);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setSelected(false);
    setActive(!active);
    console.log(e);
  };
  return (
    <div className={s.main}>
      <ul>
        <li
          onClick={(e) => handleClick(e)}
          className={s.card}
          style={{
            boxShadow: `${active ? "0px 8px 16px rgba(84, 84, 84, 0.2)" : ""}`,
            borderRadius: `${active ? "12px" : ""}`,
          }}
        >
          <div className={s.cardTitle}>
            {selected ? (
              <div className={s.new}>
                <p>NEW</p>
              </div>
            ) : (
              ""
            )}
            <span>Olga Nelson</span>
            <span> • </span>
            <span>Dec 17</span>
          </div>
          <h4>New sprint, tasks and intro information.</h4>
          <p className={s.text}>
            Hi Eric, congratulations on completing the previous assignment. This
            time you will have to focus on...
          </p>
        </li>
      </ul>
    </div>
  );
};
