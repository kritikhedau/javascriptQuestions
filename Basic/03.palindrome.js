// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function str(str) {
  return str === str.split('').reverse().join('');
}

const str = (str => str === str.split('').reverse().join(''))
console.log(str("olo"));




// program to check if the string is palindrome or not
// This is a different way

// function checkPalindrome(string) {
//   // find the length of a string
//   const len = string.length;
//   // return len / 2
//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// // take input
// const string = "racecar";

// console.log(checkPalindrome(string));
