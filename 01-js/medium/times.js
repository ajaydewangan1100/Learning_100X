/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  let startTime = new Date().getTime();
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  let endTime = new Date().getTime();

  return (endTime - startTime) / 1000;
}

console.log("1-100 in seconds ", calculateTime(100));
console.log("1-100000 in seconds ", calculateTime(100000));
console.log("1-1000000000 in seconds ", calculateTime(1000000000));
