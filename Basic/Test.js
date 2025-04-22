// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// function counter(n) {
//   let count = n;
//   return () => count++
// }

// const n = counter(5);
// console.log(n());

// console.log(n());

// console.log(n());

var createCounter = function(n){
  let currentCounter = n -1;
  return function (){
      currentCounter += 1
      return currentCounter
  }
}

const f = createCounter(5)

console.log(f());
console.log(f());

