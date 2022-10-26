import { useState } from "react";
import s from "./MessageCard.module.css";
export const MessageCard = ({
  onSetDatails,
  title,
  text,
  author,
  created,
  date,
}) => {
  const [selected, setSelected] = useState(true);
  const [active, setActive] = useState(false);
  const [blure, setBlure] = useState(true);

  const handleClick = (e) => {
    setSelected(false);
    onSetDatails({ title, text, author, date });
    console.log(e);
  };

  return (
    <>
      <div
        tabIndex={0}
        onFocus={(e) => {
          setActive(true);
        }}
        onBlur={(e) => {
          setActive(false);
          setBlure(false);
        }}
        onClick={(e) => handleClick(e)}
        className={s.card}
        style={{
          boxShadow: `${active ? "0px 8px 16px rgba(84, 84, 84, 0.2)" : ""}`,
          borderRadius: `${active ? "12px" : " 8px"}`,
          background: `${blure ? "#fff" : " "}`,
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
          <span>{created} days ago</span>
        </div>
        <h4>{title}</h4>
        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};
