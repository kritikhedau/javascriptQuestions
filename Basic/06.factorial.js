// 6. Write a JavaScript program to calculate the factorial of a given number.

const CheckFactorial = (num) => {
  let factorial = 1; // Initialize factorial

  for (i = 1; i <= num; i++) {
    factorial *= i; // Multiply factorial by i

  }
  return factorial
};

// const CheckFactorial = (num) => {
//   let factorial = 1;
//   for (i = 1; i <= num; i++) {
//     console.log((factorial = factorial * i));
//   }
//   return factorial;
// };

console.log(CheckFactorial(5));
