// 21. Sum of array
const sumArray = (...numbers) => {
  arr = [];
  arr.push(...numbers);
  const initialValue = 0;
  const sumWithInitial = arr.reduce((a, b) => a + b, initialValue);
  return sumWithInitial;
};

console.log(sumArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1));

// 22. Max, min and average number of array
function minMaxAvg(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  return { min, max, average };
}

console.log(minMaxAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// 23. Find the number with the most frequency
function frequencyNumInArray(arr) {
  let a = [];
  let b = [];
  let prev;
  arr.sort();
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  //   console.log({ a, b });
  let maxCount = Math.max(...b);
  let index = b.indexOf(maxCount);

  return { number: a[index], count: maxCount };
}

console.log(
  frequencyNumInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1])
);

// 24. filter out a table of all prime numbers
function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;

  // Run a loop from 2 to n-1
  for (let i = 2; i < n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i === 0) return false;
  }
  // otherwise, n is prime number.
  return true;
}
function filterPrime(arr) {
  let newFilter = arr.filter((item) => {
    return isPrime(item);
  });
  return newFilter;
}

console.log(filterPrime([1, 2, 3, 2, 3, 4, 6, 7]));

// 25. create an array b which is the set of squares of the numbers in array a
const squareArray = (arr) => {
  let squareFilter = arr.map((item) => {
    return item * item;
  });
  return squareFilter;
};
console.log(squareArray([1, 2, 3, 2, 3, 4, 6, 7]));

// 26. Let an array be a set of non-identical positive integers, and a number k.
// Find the elemnt in array a which is the closest to k.
// Since there can be multiple answers, print them all into an array

function minDistance(arr, k) {
  min = 1000;
  for (let i = 0; i < arr.length; i++) {
    let a = Math.abs(arr[i] - k);
    if (min > a) {
      min = a;
    }
  }
  let newFilter = arr.filter((item, index, array) => {
    return min == Math.abs(item - k);
  });
  return newFilter;
}

console.log(minDistance([1, 2, 3, 4, 6, 7], 5));

// 27. to normal name and find name with length greater than 3

const toNomalName = (name) => {
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (i == 0 || name.charAt(i - 1) == " ") {
      name =
        name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
    }
  }
  return name;
};

function findName(arr) {
  newName = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].firstName = toNomalName(arr[i].firstName);
    arr[i].lastName = toNomalName(arr[i].lastName);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstName.length >= 3) {
      for (let j = 0; j < arr[i].firstName.length; j++) {
        if (arr[i].firstName[j] == "a" || arr[i].firstName[j] == "A") {
          newName.push(arr[i]);
        }
      }
    }
  }
  return newName;
}
students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do Thi Thu",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Nhat",
  },
];

console.log(findName(students));

// 28. check last name

function lastNameCheck(arr) {
  newStudent = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].firstName = toNomalName(arr[i].firstName);
    arr[i].lastName = toNomalName(arr[i].lastName);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lastName.split(" ")[0] === "Do") {
      newStudent.push(arr[i]);
    }
  }
  return newStudent;
}

console.log(lastNameCheck(students));

// 29. sort the firstName of students
function firstNameSort(a, b) {
  let firstName1 = a.firstName;
  let firstName2 = b.firstName;
  for (let index = 0; index < firstName1.length + firstName2.length; index++) {
    if (firstName1[index] > firstName2[index]) return 1;
    if (firstName1[index] < firstName2[index]) return -1;
  }
  return 0;
}

students.sort(firstNameSort);
console.log(students);

// 30. find the second max number
function secondMax(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  let newArr = [...new Set(arr)];
  let check = false;
  let max2 = newArr[1];
  for (let index = 0; index < newArr.length; index++) {
    if (max2 == newArr[index]) {
      check = true;
      break;
    }
  }
  if (check) return max2;
  else return -1;
}

console.log(secondMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

// 31. Given an array that is a set of positive integers and a positive integer k.
// find in the array there are 3 numbers whose sum is k.

function sumNum(arr, k) {
  let check = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let h = 0; h < arr.length; h++) {
        if (arr[i] + arr[j] + arr[h] === k) check = true;
      }
    }
  }
  if (check) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

console.log(
  sumNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1], 30)
);
