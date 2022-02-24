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
