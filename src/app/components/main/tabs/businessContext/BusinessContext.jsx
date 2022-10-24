import { SprintsMessage } from "./message/SprintsMessage";
import { Sprints } from "./sprints/Sprints";

export const BusinessContext = () => {
  return (
    <div>
      <Sprints />
      <SprintsMessage />
    </div>
  );
};
