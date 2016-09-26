function to_roman_old(n) {
  // your code here
  var arr = [];
  var arrRoman = ["I","V","X","XL","L","C","CD","D","M"];
  var arrArabic = [1, 5, 10, 40, 50, 100, 400, 500, 1000];
  arrArabic.reverse();
  arrRoman.reverse();



  for (var i = 0; i < arrArabic.length; i++){
    if(n >= arrArabic[i]) {
      arr.push(arrRoman[i])
      n = n - arrArabic[i]
      i = i-1
    }

  }

  var hasil = arr.join("");
  return(hasil)
}

function to_roman(num) {
if (typeof num !== 'number')
return false;
var digits = String(+num).split("");

var key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
"","I","II","III","IV","V","VI","VII","VIII","IX"];

var roman_num = "";

i = 3;
while (i--)

roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;


return Array(+digits.join("") + 1).join("M") + roman_num;
}

// Drive code
console.log("My totally sweet testing script");
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





/*
for (var i=0; i<5; i++){
  if(n>=1000){
  arr.push("M");
  n -= 1000;

if(n>=500){
for (var i=0; i<n; i++){
arr.push("D");
n -=500;

if(n>=100){
  for (var i=0; i<n; i++){
    arr.push("C");
    n-=100;
}
}
}
}

                  if(n>=50){
                    for (var i=0; i<n; i++){
                      arr.push("L");
                      n -=50;

                        if(n>=10){
                          for(var i=0; i<n; i++){
                            arr.push("X");
                            n -= 10;

                              if(n>=5){
                                for(var i=0; i<n; i++){
                                arr.push("V");
                                n -=5;

                                  if(n>0){
                                    arr.push("I");

                                  }
                              }
                          }
                        }
                    }
                  }
              }
            }
            var ribuan = Math.floor(n/1000);
            var limaratusan = Math.floor((n%1000)/500);
            var seratus = Math.floor((n%500)/100);
            var limapuluh = Math.floor((n%100)/50);
            var sepuluh = Math.floor((n%50)/10);
            var lima = Math.floor(n%10/5);
            var satuan = Math.floor(n%5);
            */
