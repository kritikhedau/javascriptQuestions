// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function str(str) { 

//   return str === str.split('').reverse().join(''); 

// }

const str = (str => str === str.split('').reverse().join(''))
console.log(str("olo"));
