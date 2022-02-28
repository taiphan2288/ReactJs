//11. Count how many spaces in a string
const countSpaces = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count += 1;
    }
  }
  return count;
};
console.log(countSpaces(" Hello  world"));

// 12. remove spcaces in a string
function removeSpace(str) {
  str = str.replace(/\s/g, "");
  /* \s refers to any whitespace symbol: spaces, tabs, and line breaks.
    /g The regular expression contains a whitespace character (" ")
  */
  return str;
}
console.log(removeSpace("	Hello world   "));

// 13. reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("This is a beautiful day"));

// 14. Check if a string is substring of another
function isSubstring(s1, s2) {
  var M = s1.length;
  var N = s2.length;

  /* A loop to slide pat[] one by one */
  for (var i = 0; i < N; i++) {
    var j;

    /* For current index i, check for
 pattern match */
    for (j = 0; j < M; j++) {
      if (s2[i + j] != s1[j]) break;
    }

    if (j == M) return i;
  }

  return -1;
}

// function isSubstring(s1, s2) {
//   console.log(s2.indexOf(s1));
// }
console.log(isSubstring("is", "This is a beautiful day"));

// 15. Write a program to normalize the first and last names
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

console.log(toNomalName("NguyeN THI tho tHu hA"));

// 16. Write a function to calculate min, max of n numbers
function minMax(...numbers) {
  arr = [];
  arr.push(...numbers);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        /*sort from lower to higher */
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  var min = arr[0],
    max = arr[arr.length - 1];
  return { min, max };
}
console.log(minMax(1, 2, 4, 0, 12, 19));
