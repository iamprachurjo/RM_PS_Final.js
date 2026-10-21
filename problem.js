// 01. Solve Me First
var solveMeFirst = function (a, b) {
  return a + b;
};

// 02. Multiply
var multiply = function (a, b) {
  return a * b;
};

// 03. Even or Odd
var evenOrOdd = function (number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative
var makeNegative = function (number) {
  return number < 0 ? number : -number;
};

// 05. Opposite Number
var makeNegative = function (number) {
  if (number > 0) {
    return -number;
  } else if (number < 0) {
    return -number;
  } else {
    return 0;
  }
};

// 06. Simple Array Sum
var simpleArraySum = function (ar) {
  var sum = 0;
  for (i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
};
