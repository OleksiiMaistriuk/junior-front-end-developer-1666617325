import Compass from "assets/compass.svg";
import { BusinessContext } from "./businessContext/BusinessContext";

export const Tabs = () => {
  return (
    <div>
      <div>
        <BusinessContext />
        <img src={Compass} alt="" />
        <h2>BUSINESS CONTEXT</h2>
      </div>
    </div>
  );
};
