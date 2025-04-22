// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// function createCounter(n) {
//   let currentCounter = n - 1;
//   return function () {
//     currentCounter += 1;
//     return currentCounter;
//   };
// }

// const f = createCounter(5)
// console.log(f());
// console.log(f());

// function createCounter(n) {
//   return function() {
//     for (let i = 0; i < n; i++) {
//       console.log(n + i);
//     }
//   };
// }

// const f = createCounter(5);
// f();


// function createCounter(){
//   return function(n){
//       for(let i = n; i < n + n; i++){
//           console.log(i)
//       }
//   }
// }

// const f = createCounter()
// f(10)


function createCounter(n) {
  let current = n;
  return function() {
    return current++;
  };
}

const f = createCounter(10)
console.log(f());
console.log(f());
console.log(f());