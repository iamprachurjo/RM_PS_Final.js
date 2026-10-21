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

// 07. sleepIn
var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

// 08. monkeyTrouble
var monkeyTrouble = function (aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
  }
  return false;
};

// 09. sumDouble
var sumDouble = function (a, b) {
  if (a === b) {
    sum = a + b;
    return sum * 2;
  }
  return sum;
};

// 10. diff21
var diff21 = function (n) {
  if (n > 21) {
    sub = n - 21;
    return sub * 2;
  } else {
    return 21 - n;
  }
};

// 11. parrotTrouble
var parrotTrouble = function (talking, hour) {
  return talking && (hour <= 7 || hour >= 20);
};

// 12. makes10
var makes10 = function (a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
};

// 13. nearHundred
var nearHundred = function (n) {
  if (n > 10 && n < 200) {
    return true;
  } else {
    return false;
  }
};

// 14. posNeg
var posNeg = function (a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

// 15. notString
var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
};

// 16. Compare the Triplets
var compareTriplets = function (a, b) {
  var you = 0;
  var me = 0;
  for (var i = 0; i <3; i++) {
    if (a[i] > b[i]) {
      you++;
    } else if (a[i]< b[i]) {
      me++;
    }
  }
  return [you, me];
};
