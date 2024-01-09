import { useEffect, useState } from "react";
import CalendarPanel from "../Calendar/CalendarPanel";
import { getCurrMonthDates } from "../../utils";
import { format } from "date-fns";

interface SmallCalendarPropsType {
  year: number;
  monthIdx: number;
}

const SmallCalendar = ({ year, monthIdx }: SmallCalendarPropsType) => {
  const [currYear, setCurrYear] = useState<number>(0);
  const [currMonthIndex, setCurrMonthIndex] = useState<number>(0);

  const [currMonthDates, setCurrMonthDates] = useState<Date[]>([]);

  const weekDayIndex = 0;

  // updating local state if main calendar panel value changes
  useEffect(() => {
    setCurrYear(year);
    setCurrMonthIndex(monthIdx);
    setCurrMonthDates(getCurrMonthDates(year, monthIdx, weekDayIndex));
  }, [year, monthIdx]);

  useEffect(() => {
    setCurrMonthDates(
      getCurrMonthDates(currYear, currMonthIndex, weekDayIndex)
    );
  }, [currYear, currMonthIndex]);

  const onNextMonthClick = () => {
    if (currMonthIndex === 11) {
      setCurrMonthIndex(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonthIndex(currMonthIndex + 1);
    }
  };

  const onPrevMonthClick = () => {
    if (currMonthIndex === 0) {
      setCurrMonthIndex(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonthIndex(currMonthIndex - 1);
    }
  };

  return (
    <div className="leftbar-calendar">
      <div className="leftbar-calendar_header">
        <div>
          {format(new Date(currYear, currMonthIndex), "MMMM")} {currYear}
        </div>
        <div className="leftbar-calendar_actions">
          <button
            onClick={onPrevMonthClick}
            className="calender-prev-month-btn"
            title="Previous month"
          >
            <span className="material-icons-outlined calender-prev-month-icon">
              chevron_left
            </span>
          </button>

          <button
            onClick={onNextMonthClick}
            className="calender-next-month-btn"
            title="Next month"
          >
            <span className="material-icons-outlined calender-next-month-icon">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <CalendarPanel
        month={currMonthDates}
        currMonthIndex={currMonthIndex}
        className="left-sidebar-small-calendar"
      />
    </div>
  );
};

export default SmallCalendar;
