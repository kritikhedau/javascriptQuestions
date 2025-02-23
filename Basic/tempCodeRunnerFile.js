// using nested loops

const arr = [2, 3, 5, 6, 3, 2, 1, 4, 5, 6, 7];

function findMax(arr) {
  let maxNum = arr[0];
  let secNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      secNum = maxNum;
      maxNum = arr[i];
    } else if (arr[i] < maxNum && arr[i] > secNum) {
      secNum = arr[i];
    }
  }
  return {maxNum,secNum};
}

console.log(findMax(arr));
