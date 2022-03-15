function sum(a, b, cb) {
  setTimeout(function () {
    let sum = a + b;
    cb(sum);
  }, 3000);
}

function multiple(a, b, cb) {
  setTimeout(() => {
    let multiple = a * b;
    cb(multiple);
  }, 2000);
}

function division(a, b, cb) {
  setTimeout(() => {
    let division = a / b;
    cb(division);
  }, 4000);
}

const result = (a, b, c, d, m, n) => {
  sum(a, b, (sumResult) => {
    division(sumResult, c, (divisionResult) => {
      multiple(divisionResult, d, (multipleResult) => {
        sum(multipleResult, m, (sumResult) => {
          multiple(sumResult, n, (results) => {
            console.log(results);
          });
        });
      });
    });
  });
};
result(1, 2, 3, 4, 8, 7);
