import { format, isEqual, isToday, startOfMonth } from "date-fns";
import { useModalContext } from "../../context/ModalContext";
import { useCalendarContext } from "../../context/CalendarContext";

interface IDayPropsType {
  day: Date;
  currMonthIndex?: number;
  index: number;
}

const Day = ({ day, index }: IDayPropsType) => {
  const { onOpenModal } = useModalContext();
  const { currMonthIndex, daysWithData, events } = useCalendarContext();

  const todaysEvents = daysWithData[format(day, "yyyy-MM-dd")]?.events || [];

  const handleModalOpen = () => {
    onOpenModal("addEvent", format(day, "yyyy-MM-dd"));
  };

  return (
    <div className="calendar-panel_day" key={index} onClick={handleModalOpen}>
      <header className="calendar-panel_week_title">
        {index < 7 && (
          <p className="calendar-week-days">{format(day, "EEE")}</p>
        )}
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
      {todaysEvents.length
        ? todaysEvents.map((eventWithIndex, i) => (
            <div key={i} className="calendar-day-event">
              <div className="calendar-day-event_label">
                {events[eventWithIndex].title}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Day;
