// 7. Write a JavaScript function to check if a given number is prime.
// a number that can only be divided by itself and 1 without remainders.
function checkPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(checkPrime(10));
