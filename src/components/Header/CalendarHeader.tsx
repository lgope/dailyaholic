import { format } from "date-fns";
import calendarLogo from "../../assets/calendarLogo.png";
import "./CalendarHeader.css";

interface CalendarHeaderPropsType {
  currMonthIndex: number;
  setCurrMonthIndex: (a: number) => void;
  currYear: number;
  setCurrYear: (a: number) => void;
}

const CalendarHeader = ({
  currMonthIndex,
  setCurrMonthIndex,
  currYear,
  setCurrYear,
}: CalendarHeaderPropsType) => {
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

  const handleOnTodayClick = () => {
    setCurrMonthIndex(new Date().getMonth());
    setCurrYear(new Date().getFullYear());
  }

  return (
    <header className="calender-header">
      <img src={calendarLogo} alt="calendar" className="calendar-logo" />
      <h1 className="calendar-title">Calendar</h1>
      <button onClick={handleOnTodayClick} className="calendar-today-btn">
        Today
      </button>
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
      <h2 className="calender-current-month-title">
        {format(new Date(currYear, currMonthIndex), "MMMM")} {currYear}
      </h2>
    </header>
  );
};

export default CalendarHeader;
