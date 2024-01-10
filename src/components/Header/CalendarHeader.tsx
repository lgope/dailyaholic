import { format } from "date-fns";
import calendarLogo from "../../assets/calendarLogo.png";
import "./CalendarHeader.css";
import { weekdays } from "../../utils";
import Select from "../../ui/Select/Select";
import IconButton from "../../ui/Select/IconButton/IconButton";

interface CalendarHeaderPropsType {
  currMonthIndex: number;
  currYear: number;
  weekDayIndex: number | string;
  onNextMonthClick: () => void;
  onPrevMonthClick: () => void;
  handleOnTodayClick: () => void;
  handleOnWeekDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CalendarHeader = ({
  currMonthIndex,
  currYear,
  onNextMonthClick,
  onPrevMonthClick,
  handleOnTodayClick,
  handleOnWeekDayChange,
  weekDayIndex,
}: CalendarHeaderPropsType) => {
  return (
    <header className="calender-header">
      <div className="hearder-left">
        <img src={calendarLogo} alt="calendar" className="calendar-logo" />
        <h1 className="calendar-title">Calendar</h1>

        <button onClick={handleOnTodayClick} className="calendar-today-btn">
          Today
        </button>

        <IconButton
          onClick={onPrevMonthClick}
          className="calender-prev-month-btn"
          title="Previous month"
          iconName="chevron_left"
          iconClass="calender-prev-month-icon"
        />

        <IconButton
          onClick={onNextMonthClick}
          className="calender-next-month-btn"
          title="Next month"
          iconName="chevron_right"
          iconClass="calender-next-month-icon"
        />

        <h2 className="calender-current-month-title">
          {format(new Date(currYear, currMonthIndex), "MMMM")} {currYear}
        </h2>
      </div>

      <div className="hearder-right">
        <IconButton
          onClick={() => {}}
          className="calender-header-search-btn"
          title="Search"
          iconName="search"
          iconClass="calender-next-month-icon"
        />

        <Select
          onChange={handleOnWeekDayChange}
          options={weekdays}
          value={weekDayIndex}
          title="Change Day"
        />
      </div>
    </header>
  );
};

export default CalendarHeader;
