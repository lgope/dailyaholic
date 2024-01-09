export const demoWeekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const demoMonth = [
  ["31", "01", "02", "03", "04", "05", "06"],
  ["07", "08", "09", "10", "11", "12", "13"],
  ["14", "15", "16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25", "26", "27"],
  ["28", "29", "31", "30", "01", "02", "03"],
];

const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    interest: ['movie', 'song'],
  },
  {
    name: 'Alice',
    age: 30,
    gender: 'female',
    interest: ['movie', 'gardening'],
  },
  {
    name: 'Bob',
    age: 20,
    gender: 'male',
    interest: ['movie', 'listening'],
  },
  {
    name: 'Rohim',
    age: 22,
    gender: 'male',
    interest: ['reading', 'song'],
  },
  {
    name: 'Karim',
    age: 34,
    gender: 'male',
    interest: ['movie', 'song'],
  },
];

const hasUser = (arr, age) => {
    return arr.some((item) => item.age === age);
}

console.log(hasUser(data, 34))