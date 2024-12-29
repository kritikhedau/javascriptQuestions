// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function Fibonacci(num) {
  let a = 0;
  let b = 1;

  for (let i = 0; i <= num; i++) {
    var temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
  return temp
}

console.log(Fibonacci(10));
