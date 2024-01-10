import CreateEventButton from "./CreateEventButton";
import "./LeftSideBar.css";
import SmallCalendar from "./SmallCalendar";

interface LeftSideBarPropsType {
  currYear: number;
  currMonthIndex: number;
  month: Date[];
  onNextMonthClick: () => void;
  onPrevMonthClick: () => void;
}

const LeftSideBar = ({
  currYear,
  currMonthIndex,
  month,
  onNextMonthClick,
  onPrevMonthClick,
}: LeftSideBarPropsType) => (
  <aside className="calendar-left-sidebar">
    <CreateEventButton />

    <SmallCalendar
      currYear={currYear}
      currMonthIndex={currMonthIndex}
      month={month}
      onNextMonthClick={onNextMonthClick}
      onPrevMonthClick={onPrevMonthClick}
    />
  </aside>
);

export default LeftSideBar;
