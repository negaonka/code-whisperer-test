/********************Generate function bodies using signatures **********************************/
// Can select different function bodies
function generateFibbonaciSeries() {
  let a = 0;
  let b = 1;
  let c = 0;
  let series = [a, b];
  for (let i = 0; i < 10; i++) {
    c = a + b;
    a = b;
    b = c;
    series.push(c);
  }
  return series;
}

console.log(generateFibbonaciSeries());

/********************Generate function bodies using comments **********************************/
//Given a list that contains some numbers and strings, format them into a string in which the numbers are prepended with "#" and the strings are wrapped in double quotes.
//Example:
//Input: [1, 2, "a", "b"]
//Output: "#1 #2 \"a\" \"b\""

function generateString(list) {
  let string = "";
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      string += "#" + list[i] + " ";
    } else {
      string += '"' + list[i] + '" ';
    }
  }
  return string;
}
