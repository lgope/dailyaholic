const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    interest: ["movie", "song"],
  },
  {
    name: "Alice",
    age: 30,
    gender: "female",
    interest: ["movie", "gardening"],
  },
  {
    name: "Bob",
    age: 20,
    gender: "male",
    interest: ["movie", "listening"],
  },
  {
    name: "Rohim",
    age: 22,
    gender: "male",
    interest: ["reading", "song"],
  },
  {
    name: "Karim",
    age: 34,
    gender: "male",
    interest: ["movie", "song"],
  },
];

const sortUserByAgeAsc = (arr) => arr.toSorted((a, b) => a.age - b.age);

const hasUser = (arr, age) => arr.some((item) => item.age === age);

// console.log(sortUserByAgeAsc(data));

// console.log({ data });

// const arrData = [2, 4, 5, 6, 7, 9];

// function customMap(callback) {
//   const resultArray = [];
//   for (let index = 0; index < this.length; index++) {
//     resultArray.push(callback(this[index], index, this));
//   }
//   return resultArray;
// }

// Array.prototype.customMap = customMap;

// console.log(arrData.customMap((ar, i) => ar * ar));
