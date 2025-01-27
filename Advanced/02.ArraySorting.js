// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

function sortByKey(array, key) {
  return array.slice().sort((a, b) => {

      if (a[key] < b[key]) return -1; // a[key] should appear before b[key]
      if (a[key] > b[key]) return 1;  // a[key] should appear after b[key]
      return 0;                       // a[key] and b[key] are equal
  });
}

// Example usage
const array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

const sortedArray = sortByKey(array, "age");
console.log(sortedArray);
