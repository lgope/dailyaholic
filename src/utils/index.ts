import {
  Day,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

// const splitByWeek = <T>(array: T[], parts: number) =>
//   array.reduce(
//     (acc, value, i) => (acc[i % parts].push(value), acc),
//     [...Array(parts)].map(() => []) as T[][]
//   );

export const getCurrMonthDates = (
  year: number = 2023,
  month: number = 1,
  firstDayOfWeek: number = 0
) => {
  // month first and last date
  const monthStartDate = startOfMonth(new Date(year, month));

  const monthEndDate = endOfMonth(monthStartDate);

  // week first and last date
  const firstWeekday = startOfWeek(monthStartDate, {
    weekStartsOn: firstDayOfWeek as Day,
  });
  const lastWeekday = endOfWeek(monthEndDate, {
    weekStartsOn: firstDayOfWeek as Day,
  });

  // month date
  const calendarDates: Date[] = eachDayOfInterval({
    start: firstWeekday,
    end: lastWeekday,
  });

  // return  splitByWeek(calendarDates);
  return calendarDates;
};

export const demoWeekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const demoMonth = [
  ["31", "01", "02", "03", "04", "05", "06"],
  ["07", "08", "09", "10", "11", "12", "13"],
  ["14", "15", "16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25", "26", "27"],
  ["28", "29", "31", "30", "01", "02", "03"],
];

export const weekdays = [
  { value: 0, name: "Sun" },
  { value: 1, name: "Mon" },
  { value: 2, name: "Tue" },
  { value: 3, name: "Wed" },
  { value: 4, name: "Thu" },
  { value: 5, name: "Fri" },
  { value: 6, name: "Sat" },
];
