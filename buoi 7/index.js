//1. Test prime number
function testPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        console.log("No");
      }
    }
    console.log("Yes");
  }
}

console.log(testPrime(11));

//2. Print the numbers from 1 to n
function printNum(n) {
  for (let x = 1; x <= n; x++) {
    console.log(x);
  }
}

console.log(printNum(10));

//3. print odd numbers
function oddNum(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 2 !== 0) {
      console.log(x);
    }
  }
}

console.log(oddNum(5));

//4. print event numbers
function eventNum(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}

console.log(eventNum(20));

//5. Print prime number from 1 to n
function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;

  // Run a loop from 2 to n-1
  for (let i = 2; i < n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i == 0) return false;
  }
  // otherwise, n is prime number.
  return true;
}
// Driver code
var N = 10;
// check for every number from 1 to N
for (let i = 1; i <= N; i++) {
  // check if current number is prime
  if (isPrime(i)) {
    console.log(i);
  }
}

//6. Sum of the number from 1 to n
function sum(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    s += x;
  }
  console.log(`bai 5: ${s}`);
}
console.log(sum(10));
//7. Sum of the square root of the number from 1 to n
function sumOfSquare(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    s += x * x;
  }
  console.log(`bai 6: ${s}`);
}
console.log(sumOfSquare(10));

//8. Sum of odd number from 1 to n
function sumOfOdd(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    if (x % 2 !== 0) {
      s += x;
    }
  }
  console.log(`bai 7: ${s}`);
}
console.log(sumOfOdd(10));

// 9. Check if the number n is composed of all odd numbers or not
const isOddNumber = (n) => {
  let i = 0,
    result = "YES",
    nStr = String(n);
  while (i <= nStr.length && result === "YES") {
    if ((nStr[i] * 1) % 2 === 0) {
      result = "NO";
    } else i++;
  }
  return result;
};
console.log(isOddNumber(135));

//10. multiple table
const mulTable = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("\t");
  }
};
console.log(mulTable());

//11. Check if n is a symmetric number
const symNum = (n) => {
  let nStr = String(n),
    result = true;
  let i = 0,
    j = nStr.length - 1;
  while (i < j) {
    if (nStr[i] != nStr[j]) {
      result = false;
      break;
    } else {
      ++i;
      --j;
    }
  }
  if (result == true) {
    console.log("yes");
  } else console.log("no");
};
console.log(symNum(121));
