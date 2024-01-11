import { useCalendarContext } from "../../context/CalendarContext";
import { getCurrMonthDates } from "../../utils";
import "./CalendarPanel.css";
import Day from "./Day";

interface ICalendarPanelPropsType {
  className?: string;
}

const CalendarPanel = ({ className }: ICalendarPanelPropsType) => {
  const { currYear, currMonthIndex, weekDayIndex } = useCalendarContext();

  const month = getCurrMonthDates(currYear, currMonthIndex, weekDayIndex);

  return (
    <div className={`calendar-panel_date_view ${className}`}>
      {month.map((day, i) => (
        <Day key={i} day={day} index={i} currMonthIndex={currMonthIndex} />
      ))}
    </div>
  );
};

export default CalendarPanel;
