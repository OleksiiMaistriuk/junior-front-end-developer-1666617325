import { SidebarHeader } from "./header/SidebarHeader";
import { SidebarTasks } from "./tasks/SidebarTasks";

export const Sidebar = () => {
  return (
    <div>
      <SidebarHeader />
      <SidebarTasks />
    </div>
  );
};
