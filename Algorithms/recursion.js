let counter = 0;

function inception() {
  if (counter > 3) {
    return "Done!";
  }
  counter++;
  return inception();
}

console.log(inception());

// ----------QUESTION 1--------------

// Write two function that finds the factorial of any number. One should use recursive, the other should just use a for loop

// SOLUTION 1
let answer = 1;

function findFactorialRecursive(number) {
  // Check if number is less than 0, in that case there's no need multplying as 0! is 1 so we return answer
  if (number <= 0) {
    return answer;
  }

  // Set answer to be the current answer * the number and decrement number
  answer = answer * number;
  number--;

  // Call the function again
  findFactorialRecursive(number);

  return answer;
}

// SOLUTION 2
function findFactorialRecursive(number) {
  // Check if number is less than or  equal to 2  and return the number because we know that anything below 2 including 2 returns itself
  if (number <= 2) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  // Check if number is less than 0, in that case there's no need multplying as 0! is 1 so we return answer
  if (number <= 0) {
    return answer;
  }

  // Iterate over the number and make answer the multiplication of it with the current answer
  for (let i = number; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

// ---------------QUESTION 2------------------

// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the previous values, that means that for N=5 --> 2 + 3

// SOLUTION 1
function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  } else if (n === 2) {
    return 1;
  }

  let prev = 0;
  let cur = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    next = prev + cur;
    prev = cur;
    cur = next;
  }

  return next;
}

// SOLUTION 2
function fibonacciIterative(n) {
  const arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  } else if (n === 2) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
