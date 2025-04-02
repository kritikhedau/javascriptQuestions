// 4. Write a JavaScript program to reverse a given string.

function reverseStr(str) {
  let splitString = str.split("");
  console.log(splitString);

  let reverseString = splitString.reverse();
  console.log(reverseString);

  let joinString = reverseString.join("");

  // return joinString;
  return str.split("").reverse().join("");
}
// const reverseStr = (str) => str.split("").reverse().join(",");

// This is a differnet way without using built-in method

// function reverseStr(str) {
//   let newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// function reverseStr(str) {
//   console.log("charAt", str.charAt(0));
//   console.log("substr", str.substr(1));
//   if (str === "") {
//     return "";
//   } else return reverseStr(str.substr(1)) + str.charAt(0);
// }


console.log(reverseStr("hello"));
