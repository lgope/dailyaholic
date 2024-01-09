import { useState } from "react";
import "./App.css";
import CalendarPanel from "./components/Calendar/CalendarPanel";
import CalendarHeader from "./components/Header/CalendarHeader";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import { getCurrMonthDates } from "./utils";

const App = () => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonthIndex, setCurrMonthIndex] = useState(new Date().getMonth());

  const weekDayIndex = 0;
  const currMonthDates = getCurrMonthDates(
    currYear,
    currMonthIndex,
    weekDayIndex
  );

  return (
    <div className="main-panel">
      <CalendarHeader
        currMonthIndex={currMonthIndex}
        setCurrMonthIndex={setCurrMonthIndex}
        currYear={currYear}
        setCurrYear={setCurrYear}
      />
      <div className="calendar-panel">
        <LeftSideBar year={currYear} monthIdx={currMonthIndex} />
        <CalendarPanel currMonthIndex={currMonthIndex} month={currMonthDates} />
        <RightSideBar />
      </div>
    </div>
  );
};

export default App;
