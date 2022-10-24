import { SidebarHeader } from "./header/SidebarHeader";
import s from "./Sidebar.module.css";
import { SidebarTasks } from "./tasks/SidebarTasks";
export const Sidebar = () => {
  return (
    <div className={s.main}>
      <SidebarHeader />
      <SidebarTasks />
    </div>
  );
};
