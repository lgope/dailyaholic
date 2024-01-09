import CalendarPanel from "../Calendar/CalendarPanel";
import CreateEventButton from "./CreateEventButton";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  return (
    <aside className="calendar-left-sidebar">
      <CreateEventButton />

      <CalendarPanel className="left-sidebar-small-calender" />
    </aside>
  );
};

export default LeftSideBar;
