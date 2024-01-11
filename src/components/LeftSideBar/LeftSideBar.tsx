import { useCalendarContext } from "../../context/CalendarContext";
import { getCurrMonthDates } from "../../utils";
import CreateEventButton from "./CreateEventButton";
import "./LeftSideBar.css";
import SmallCalendar from "./SmallCalendar";

const LeftSideBar = () => {
  const {
    currYear,
    currMonthIndex,
    weekDayIndex,
    onPrevMonthClick,
    onNextMonthClick,
  } = useCalendarContext();

  const month = getCurrMonthDates(currYear, currMonthIndex, weekDayIndex);

  return (
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
};
export default LeftSideBar;
