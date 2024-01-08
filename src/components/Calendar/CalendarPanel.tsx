import React from "react";
import "./CalendarPanel.css";
import { demoMonth, demoWeekDays } from "../../utils";

const CalendarPanel = () => {
  const TODAY_DATE = "09";

  return (
    <div className="calendar-panel_date_view">
      {demoMonth.map((days, i) => (
        <React.Fragment key={i}>
          {days.map((day, idx) => (
            <div className="calendar-panel_day" key={idx}>
              <header className="calendar-panel_week_title">
                {i === 0 && <p className="calendar-week-days">{demoWeekDays[i]}</p>}
                <p
                  className={`calendar-panel_date ${
                    day === TODAY_DATE ? "calendar-panel_today_date" : ""
                  }`}
                >
                  {day}
                </p>
              </header>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalendarPanel;
