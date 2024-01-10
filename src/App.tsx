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
  };

  return (
    <div className="main-panel">
      <CalendarHeader
        currMonthIndex={currMonthIndex}
        currYear={currYear}
        handleOnTodayClick={handleOnTodayClick}
        onNextMonthClick={onNextMonthClick}
        onPrevMonthClick={onPrevMonthClick}
      />
      <div className="calendar-panel">
        <LeftSideBar
          currYear={currYear}
          currMonthIndex={currMonthIndex}
          month={currMonthDates}
          onNextMonthClick={onNextMonthClick}
          onPrevMonthClick={onPrevMonthClick}
        />
        <CalendarPanel currMonthIndex={currMonthIndex} month={currMonthDates} />
        <RightSideBar />
      </div>
    </div>
  );
};

export default App;
