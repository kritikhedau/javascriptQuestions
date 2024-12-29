//2. Write a JavaScript program to find the maximum number in an array.

var number = [11, 12, 3, 4, 5, 6, 7, 8, 9];
// function maxNumber(arr) {
//   let maxNum = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// console.log(maxNumber(number));

// let maxNumber = Math.max(...number);
// console.log(number); // Output: 9

// let maxNumber = number.reduce(
//   (max, current) => (current > max ? current : max),
//   number[2]
// );

// console.log(maxNumber);

// let maxNum = number[0];
// number.forEach((element) => {
//   if (element > maxNum) {
//     maxNum = element
//   }
// });

// console.log(maxNum);

let maxNum = number.slice()

console.log(maxNum);