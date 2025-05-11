function add(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

add(3, 4, function(result) {
  console.log("The result is:", result); // The result is: 7
});