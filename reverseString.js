// 4. Write a JavaScript program to reverse a given string.

// function reverseStr(str) {
//   return str.split('').reverse().join('')
// }
const reverseStr = (str) => str.split("").reverse().join(",");

console.log(reverseStr("hello"));
