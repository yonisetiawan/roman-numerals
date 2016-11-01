function to_roman_old(n) {
  // your code here
  var roman = ["M","CM","D","CD","C","XC","L","XL","X","VIIII","V","IIII","I"];
  var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  if(n>4999 || n<=0){
    return "Masukkan Nilai Antara 1 sd 4999"
  }else{
    var hasil = "";
    for (var i = 0; i < roman.length; i++) {
        while(n>=number[i]){
            n -= number[i]
            hasil += roman[i]
        }
    }
    return hasil;
  }
}

function to_roman(n) {
  // create your implementation code here
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
