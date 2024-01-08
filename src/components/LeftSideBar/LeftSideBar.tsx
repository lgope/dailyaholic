import CreateEventButton from "./CreateEventButton";
import "./LeftSideBar.css";

const SideBar = () => {
  return (
    <aside className="calendar-left-sidebar">
      <CreateEventButton />
    </aside>
  );
};

export default SideBar;
