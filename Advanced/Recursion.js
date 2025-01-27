//  4. Write a recursive function to calculate the factorial of a given number.

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(5));
