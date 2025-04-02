// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

var arr = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
  // return numbers.map((item) => item % 2 === 0);
}

// function filterEvenNumbers(arr) {
//   const evenNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumber.push(arr[i]);
//     }
//   }
//   return evenNumber;
// }

console.log(filterEvenNumbers(arr));
