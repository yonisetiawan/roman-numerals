//mapping roman

function to_roman_old(n) {
  // your code here
  var roman = ["I", "V", "X", "XL", "L" , "C" , "CD", "D", "CM", "M"].reverse();
  //map arab number
  var number = [1, 5, 10, 40, 50, 100, 400, 500, 900, 1000].reverse()
  //funttion to_roman_old with parameter n
  //var result saving result
  var result = "";

  //looping to check number
  for (var i = 0; i < number.length; i++) {
    //numberCount saving the values of Math.floor(n/number[i])
    var numberCount = Math.floor(n/number[i]);
    //looping check the leftovers
    for (var j = 0; j < numberCount; j++) {
      //add roman[i] to current resultgit
      result += roman[i];
    }
    //updating n values with n % number[i]
    n = n%number[i];
  }
  //return result
  return result;
}

function to_roman(n) {
  // your implementation code here
  //var result saving result
  var result = "";
  var roman = ["I", "IV", "V", "IX", "X", "XL", "L" , "C" , "CD", "D", "CM", "M"].reverse();
  //map arab number
  var number = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 900, 1000].reverse()
  //funttion to_roman_old with parameter n
  //looping to check number
  for (var i = 0; i < number.length; i++) {
    //numberCount saving the values of Math.floor(n/number[i])
    var numberCount = Math.floor(n/number[i]);
    //looping check the leftovers
    for (var j = 0; j < numberCount; j++) {
      //add roman[i] to current resultgit
      result += roman[i];
    }
    //updating n values with n % number[i]
    n = n%number[i];
  }
  //return resul
  return result;

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
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

// console.log("My totally sweet testing script for new roman\n");
// console.log("input | expected | actual");
// console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
