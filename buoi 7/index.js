// Test prime number
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

// Print the numbers from 1 to n
function printNum(n) {
  for (let x = 1; x <= n; x++) {
    console.log(x);
  }
}

console.log(printNum(10));

// print odd numbers
function oddNum(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 2 !== 0) {
      console.log(x);
    }
  }
}

console.log(oddNum(10));

// print event numbers
function eventNum(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}

console.log(eventNum(10));

// Print prime number from 1 to n
function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;

  // Run a loop from 2 to n-1
  for (var i = 2; i < n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i == 0) return false;
  }
  // otherwise, n is prime number.
  return true;
}
// Driver code
var N = 10;
// check for every number from 1 to N
for (var i = 1; i <= N; i++) {
  // check if current number is prime
  if (isPrime(i)) {
    console.log(i);
  }
}

// Sum of the number from 1 to n
function sum(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    s += x;
  }
  console.log(`bai 5: ${s}`);
}

// Sum of the square root of the number from 1 to n
function sumOfSquare(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    s += x * x;
  }
  console.log(`bai 6: ${s}`);
}

// Sum of odd number from 1 to n
function sumOfOdd(n) {
  var s = 0;
  for (let x = 1; x <= n; x++) {
    if (x % 2 !== 0) {
      s += x;
    }
  }
  console.log(`bai 7: ${s}`);
}
