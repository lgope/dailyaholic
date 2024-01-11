import IconButton from "../../ui/IconButton/IconButton";
import CalendarPanel from "../Calendar/CalendarPanel";
import { format } from "date-fns";

interface SmallCalendarPropsType {
  currYear: number;
  currMonthIndex: number;
  month: Date[];
  onNextMonthClick: () => void;
  onPrevMonthClick: () => void;
}

const SmallCalendar = ({
  currYear,
  currMonthIndex,
  onNextMonthClick,
  onPrevMonthClick,
}: SmallCalendarPropsType) => {
  return (
    <div className="leftbar-calendar">
      <div className="leftbar-calendar_header">
        <div>
          {format(new Date(currYear, currMonthIndex), "MMMM")} {currYear}
        </div>
        <div className="leftbar-calendar_actions">
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
        </div>
      </div>
      <CalendarPanel className="left-sidebar-small-calendar" />
    </div>
  );
};

export default SmallCalendar;
