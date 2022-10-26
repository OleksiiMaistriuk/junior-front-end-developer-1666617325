import { useState } from "react";
import s from "./MessageCard.module.css";
export const MessageCard = ({ onSetDatails, title, text, author, created }) => {
  const [selected, setSelected] = useState(true);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setSelected(false);
    setActive(!active);
    onSetDatails({ title, text, author, created });
    console.log(e);
  };
  return (
    <>
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
            <span>{author}</span>
            <span> • </span>
            <span>{created}</span>
          </div>
          <h4>{title}</h4>
          <p className={s.text}>{text}</p>
        </li>
      </ul>
    </>
  );
};
