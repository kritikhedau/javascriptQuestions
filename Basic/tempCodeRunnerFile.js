function reverseWords(string) {
  let newStr = "";
  let word = "";
  
  // Traverse the string from the end
  for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] !== ' ') {
          word = string[i] + word; // Build word character by character
      } else {
          if (word !== "") {
              newStr += (newStr ? " " : "") + word; // Add word to newStr
              word = ""; // Reset word
          }
      }
  }
  
  // Add the last word (since there is no space after it)
  if (word !== "") {
      newStr += (newStr ? " " : "") + word;
  }

  return newStr;
}

console.log(reverseWords('hello world')); // Output: "world hello"
