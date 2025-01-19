// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

var arr = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
  // return numbers.map((item) => item % 2 === 0);
}

console.log(filterEvenNumbers(arr));
