// Call libraries
var readlineSync = require("readline-sync");
const shortid = require("shortid");
var fs = require("fs");
const { log } = require("util");

var showMenu = function () {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
};

function showStudents() {
  // to read 'input.txt' file
  const data = fs.readFileSync("./dataJson.txt", {
    encoding: "utf8",
    flag: "r",
  });
  console.log(data);
}

var flag = true;
while (flag) {
  showMenu();
  const choice = readlineSync.question("Your choice: ");
  let test = parseInt(choice);
  switch (test) {
    case 1:
      console.log(showStudents());
      flag = true;
      break;
    case 2:
      console.log(createStudents());
      flag = true;
      break;
    case 3:
      console.log(deleteStudents());
      flag = true;
      break;
    case 4:
      console.log(editStudents());
      flag = true;
      break;
    case 5:
      console.log(findStudents());
      flag = true;
      break;
    case 6:
      console.log(sortNameStudents());
      flag = true;
      break;
    case 7:
      console.log(sortAgeStudents());
      break;
    case 8:
      console.log(deleteAllStudents());
      flag = true;
      break;
    case 9:
      console.log(sumAgeStudents());
      flag = true;
      break;
    case 10:
      console.log("Exit");
      flag = false;
      break;
    default:
      console.log("Please input valid option!");
      break;
  }
}
