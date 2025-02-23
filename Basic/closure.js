// Closures is javascript
// Ques 1: What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    // console.log(count);
  }
  // console.log(count);
})();

// Ques 2: Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    return num + innerNum;
  };
}

var addSix = createBase(6);
addSix(10); //return 16
// console.log(addSix(10));
addSix(21); //return 27
// console.log(addSix(21));

// Ques 3: Time Optimization

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

// console.time("6");
// find(6);
// console.timeEnd("6");

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closures = find();
// console.time("6");
// closures(6);
// console.timeEnd("6");

// Ques 4: Block scope and setTimeout

for (let i = 0; i < 30; i++) {
  setTimeout(function log() {
    console.log(i);
  },i * 1000);
}
