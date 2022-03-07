const data = [
  { name: "Tung", age: 27, isSchool: false },
  { name: "Khoa", age: 20, isSchool: true },
  { name: "Triet", age: 18, isSchool: false },
  { name: "Hong", age: 15, isSchool: false },
  { name: "Tring", age: 10, isSchool: false },
];

const over18 = (arr) => arr.filter((el) => el.age > 18);
console.log(over18(data));

const school = (arr) => arr.filter((el) => el.isSchool);
console.log(school(data));

const ageAvg = (arr) => arr.reduce((sum, el) => sum + +el.age, 0) / arr.length;
console.log(ageAvg(data));
