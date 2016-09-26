function to_roman_old(n) {
  var angka = String(+n).split("");
  var rom = [
    "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
    "", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "VIIII"
  ];
  var hasil = "",
    i = 3;

  while (i--) {
    // console.log("sebelum: " + hasil);
    hasil = (rom[+angka.pop() + (i * 10)] || "") + hasil;
    // console.lˀˀog("sebelum: " + hasil);
  }
  return Array(+angka.join("") + 1).join("M") + hasil;
}

function to_roman(n) {
  // your implementation code here
  var angka = String(+n).split("");
  var rom = [
    "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
  ];
  var hasil = "",
    i = 3;

  while (i--) {
    // console.log("sebelum: " + hasil);
    hasil = (rom[+angka.pop() + (i * 10)] || "") + hasil;
    // console.lˀˀog("sebelum: " + hasil);
  }
  return Array(+angka.join("") + 1).join("M") + hasil;


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
