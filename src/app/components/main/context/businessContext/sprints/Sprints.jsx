import { useState } from "react";
import s from "./Sprints.module.css";
export const Sprints = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className={s.main} onClick={() => setSelected(false)}>
      <ul>
        <li className={s.card}>
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
      <ul>
        <li className={s.card}>
          <div className={s.cardTitle}>
            <div className={s.new}>
              <p>NEW</p>
            </div>
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
        <li className={s.card}>
          <div className={s.cardTitle}>
            <div className={s.new}>
              <p>NEW</p>
            </div>
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
