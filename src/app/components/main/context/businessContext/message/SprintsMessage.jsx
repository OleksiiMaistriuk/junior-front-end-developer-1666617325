import Avatar from "assets/avatars/Frame.svg";
import s from "./SprintsMessage.module.css";
export const SprintsMessage = () => {
  return (
    <div className={s.main}>
      <h3 className={s.title}>Application has been accepted 🎉 🙌</h3>
      <div className={s.context}>
        <img src={Avatar} alt="" />
        <div>
          <div className={s.subTitle}>
            <p>Kirsten Aniston</p>
            <span>•</span>
            <span> Today, 17th December </span>
            <span>•</span>
            <span>11:20</span>
          </div>

          <p className={s.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit laudantium consequuntur eos excepturi quidem velit
            enim, deserunt culpa nostrum animi beatae impedit cumque mollitia
            corrupti inventore cupiditate officia distinctio?
          </p>
        </div>
      </div>
    </div>
  );
};
