import React, { createContext, useContext, useState } from "react";

import { IEvents, IDaysData } from "../types/types";

interface ICalendarContext {
  weekDayIndex: number;
  currMonthIndex: number;
  currYear: number;
  events: IEvents;
  daysWithData: IDaysData;
  setWeekDayIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrMonthIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrYear: React.Dispatch<React.SetStateAction<number>>;
  setEvents: React.Dispatch<React.SetStateAction<IEvents>>;
  setDaysWithData: React.Dispatch<React.SetStateAction<IDaysData>>;
  handleOnWeekDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onNextMonthClick: () => void;
  onPrevMonthClick: () => void;
  handleOnTodayClick: () => void;
}

const CalendarContext = createContext<ICalendarContext>({
  weekDayIndex: 0,
  currMonthIndex: 0,
  currYear: 0,
  events: {},
  daysWithData: {},
  setWeekDayIndex: () => {},
  setCurrMonthIndex: () => {},
  setCurrYear: () => {},
  setEvents: () => {},
  setDaysWithData: () => {},
  handleOnWeekDayChange: () => {},
  onNextMonthClick: () => {},
  onPrevMonthClick: () => {},
  handleOnTodayClick: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useCalendarContext = () => {
  return useContext(CalendarContext);
};

export const CalendarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonthIndex, setCurrMonthIndex] = useState(new Date().getMonth());

  const [weekDayIndex, setWeekDayIndex] = useState(0);

  const [events, setEvents] = useState<IEvents>(JSON.parse(localStorage.getItem("events") || "{}"));

  const [daysWithData, setDaysWithData] = useState<IDaysData>(JSON.parse(localStorage.getItem("daysWithData") || "{}"));
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnWeekDayChange = (e: any) => {
    setWeekDayIndex(e.target?.value);
  };

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
    <CalendarContext.Provider
      value={{
        weekDayIndex,
        currYear,
        currMonthIndex,
        events,
        daysWithData,
        setWeekDayIndex,
        setCurrMonthIndex,
        setCurrYear,
        setEvents,
        setDaysWithData,
        handleOnWeekDayChange,
        onNextMonthClick,
        onPrevMonthClick,
        handleOnTodayClick,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
