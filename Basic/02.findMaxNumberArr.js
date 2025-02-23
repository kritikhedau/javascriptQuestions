//2. Write a JavaScript program to find the maximum number in an array.

var arr = [18, 12, 33, 4, 54, 6, 7, 8, 99,88];

// This using regular function

function maxNumber(arr) {
  let maxNum = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(maxNumber(arr));

// This is using Math.max method

// let maxNumber = Math.max(...arr);
// console.log(maxNumber);

// This is using reduce() method

// let maxNumber = arr.reduce(
//   (max, current) => (current > max ? current : max),
//   -Infinity
// );

// console.log(maxNumber);

// This is using forEach method

// let maxNum = arr[0];
// arr.forEach((element) => {
//   if (element > maxNum) {
//     maxNum = element;
//   }
// });

// console.log(maxNum);

// A different way to find greatest and second greatest.

function maxNum(arr) {
  let secondGreatest = -Infinity;
  let greatest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      // Update both greatest and second greatest
      secondGreatest = greatest;
      greatest = arr[i];
    }
  }
  return { secondGreatest, greatest };
}

console.log(maxNum(arr));
