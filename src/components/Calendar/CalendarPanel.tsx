import "./CalendarPanel.css";
import { format, isEqual, isToday, startOfMonth } from "date-fns";

interface CalendarPanelPropsType {
  month: Date[];
  currMonthIndex: number;
  className?: string;
}

const CalendarPanel = ({
  month,
  currMonthIndex,
  className = "",
}: CalendarPanelPropsType) => (
  <div className={`calendar-panel_date_view ${className}`}>
    {month.map((day, i) => (
      <div className="calendar-panel_day" key={i}>
        <header className="calendar-panel_week_title">
          {i < 7 && <p className="calendar-week-days">{format(day, "EEE")}</p>}
          <p
            className={`calendar-panel_date ${
              isToday(day) ? "calendar-panel_today_date" : ""
            } ${
              currMonthIndex !== day.getMonth()
                ? "calendar-other-month-dates"
                : ""
            }`}
          >
            {isEqual(day, startOfMonth(day))
              ? format(day, "MMM d")
              : format(day, "d")}
          </p>
        </header>
      </div>
    ))}
  </div>
);

export default CalendarPanel;
