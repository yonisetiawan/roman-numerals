function to_roman_old(num) {
  // Reference to old roman
  var roman = ["M","CM", "D", "CD", "C","XC", "L", "XL", "X", "V", "I"],
  arabic = [1000,900, 500, 400, 100, 90, 50, 40, 10, 5, 1], result = [];
  // looping through the arabic and check if the num is met the while condition
  for (var i = 0; i < arabic.length; i += 1) {
    while (num % arabic[i] < num) {
      result.push(roman[i]);
      // update num by the condition that it meets
      num -= arabic[i];
    }
  }
  return result.join("");
}

function to_roman(num) {
  // update new roman number
  var roman = ["M","CM", "D", "CD", "C","XC", "L", "XL", "X","IX", "V", "IV", "I"],
  arabic = [1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5,4, 1], result = [];

  for (var i = 0; i < arabic.length; i += 1) {
    while (num % arabic[i] < num) {
      result.push(roman[i]);
      num -= arabic[i];
    }
  }
  return result.join("");
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
