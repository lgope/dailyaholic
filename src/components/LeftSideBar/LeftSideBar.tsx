import CreateEventButton from "./CreateEventButton";
import "./LeftSideBar.css";
import SmallCalendar from "./SmallCalendar";

interface LeftSideBarPropsType {
  year: number;
  monthIdx: number;
}

const LeftSideBar = ({ year, monthIdx }: LeftSideBarPropsType) => (
  <aside className="calendar-left-sidebar">
    <CreateEventButton />

    <SmallCalendar year={year} monthIdx={monthIdx} />
  </aside>
);

export default LeftSideBar;
