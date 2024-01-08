import calendarLogo from "../../assets/calendarLogo.png";
import './CalendarHeader.css'


const CalendarHeader = () => {
  const onClick = () => {};
  return (
    <header className="calender-header">
      <img src={calendarLogo} alt="calendar" className="calendar-logo" />
      <h1 className="calendar-title">Calendar</h1>
      <button onClick={() => {}} className="calendar-today-btn">
        Today
      </button>
      <button onClick={onClick} className="calender-prev-month-btn" title="Previous month">
        <span className="material-icons-outlined calender-prev-month-icon">
          chevron_left
        </span>
      </button>

      <button onClick={onClick} className="calender-next-month-btn" title="Next month">
        <span className="material-icons-outlined calender-next-month-icon">
          chevron_right
        </span>
      </button>
      <h2 className="calender-current-month-title">January 2024</h2>
    </header>
  );
};

export default CalendarHeader;
