import CreateEventButton from "./CreateEventButton";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="calendar-sidebar">
      <CreateEventButton />
    </aside>
  );
};

export default SideBar;
