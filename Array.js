function checkElement(nestedArray) {
  let max = nestedArray[0][0]; // Assume the first element of the first subarray is the largest
  for (let i = 0; i < nestedArray.length; i++) { // Loop through all subarrays
    for (let j = 0; j < nestedArray[i].length; j++) { // Loop through elements in each subarray
      if (nestedArray[i][j] > max) {
        max = nestedArray[i][j]; // Update max if a larger value is found
      }
    }
  }
  return max; // Return the largest value found in the nested array
}

let nestedArray = [[1, 2, 4, 5, 8, 11, 1, 2, 3], [3, 4, 5], [6]];
console.log(checkElement(nestedArray)); // Output: 11
