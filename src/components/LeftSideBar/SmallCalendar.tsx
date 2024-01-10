import IconButton from "../../ui/Select/IconButton/IconButton";
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
  month,
  onNextMonthClick,
  onPrevMonthClick,
}: SmallCalendarPropsType) => {
  // const [currYear, setCurrYear] = useState<number>(0);
  // const [currMonthIndex, setCurrMonthIndex] = useState<number>(0);

  // const [currMonthDates, setCurrMonthDates] = useState<Date[]>([]);

  // const weekDayIndex = 0;

  // updating local state if main calendar panel value changes
  // useEffect(() => {
  //   setCurrYear(year);
  //   setCurrMonthIndex(monthIdx);
  //   setCurrMonthDates(getCurrMonthDates(year, monthIdx, weekDayIndex));
  // }, [year, monthIdx]);

  // useEffect(() => {
  //   setCurrMonthDates(
  //     getCurrMonthDates(currYear, currMonthIndex, weekDayIndex)
  //   );
  // }, [currYear, currMonthIndex]);

  // const onNextMonthClick = () => {
  //   if (currMonthIndex === 11) {
  //     setCurrMonthIndex(0);
  //     setCurrYear(currYear + 1);
  //   } else {
  //     setCurrMonthIndex(currMonthIndex + 1);
  //   }
  // };

  // const onPrevMonthClick = () => {
  //   if (currMonthIndex === 0) {
  //     setCurrMonthIndex(11);
  //     setCurrYear(currYear - 1);
  //   } else {
  //     setCurrMonthIndex(currMonthIndex - 1);
  //   }
  // };

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
      <CalendarPanel
        month={month}
        currMonthIndex={currMonthIndex}
        className="left-sidebar-small-calendar"
      />
    </div>
  );
};

export default SmallCalendar;
