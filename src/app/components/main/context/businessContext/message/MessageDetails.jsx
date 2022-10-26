import Avatar from "assets/avatars/Frame.svg";
import s from "./MessageDetails.module.css";
export const MessageDetails = ({ messageDetails }) => {
  return (
    <div className={s.main}>
      <h3 className={s.title}>{messageDetails.title}</h3>
      <div className={s.context}>
        <span className={s.avatar}>
          <img src={Avatar} alt="avatar" />
        </span>

        <div>
          <div className={s.subTitle}>
            <p>{messageDetails.author}</p>
            <span>•</span>

            <span>{messageDetails.date}</span>
          </div>

          <p className={s.text}> {messageDetails.text}</p>
        </div>
      </div>
    </div>
  );
};
