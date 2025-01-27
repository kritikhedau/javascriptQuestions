// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

const str = "hello my name is kritik";

function ConvStrToCap(str) {
  let arr = str.split(" ");
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) .join(" ");
}

console.log(ConvStrToCap(str));
