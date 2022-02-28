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
  //   console.log(arr);
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
