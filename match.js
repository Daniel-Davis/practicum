var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d\d)\b/g; // modified so that way it only takes double digit numbers
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
