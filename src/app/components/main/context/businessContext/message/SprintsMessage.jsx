import Avatar from "assets/avatars/Frame.svg";
import s from "./SprintsMessage.module.css";
export const SprintsMessage = () => {
  return (
    <div className={s.main}>
      <h3>Application has been accepted 🎉 🙌</h3>
      <div>
        <img src={Avatar} alt="" />
        <p>Kirsten Aniston</p>
        <span> • Today, 17th December • 11:20</span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
        reprehenderit laudantium consequuntur eos excepturi quidem velit enim,
        deserunt culpa nostrum animi beatae impedit cumque mollitia corrupti
        inventore cupiditate officia distinctio?
      </p>
    </div>
  );
};
