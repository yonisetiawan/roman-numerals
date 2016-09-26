function to_roman_old(n) {
  // your code here
  var result = ""
  if(n>=1000){
    var nstring = n.toString()
    var thousand = parseInt(nstring[0])
    var a = ""
    for (var i=0; i<thousand; i++){
      a += "M"
    }
    n %= 1000
    result += a
    to_roman_old(n)
  }
  if(n>=500 && n<1000){
    var nstring = n.toString()
    var fvhundred = 1
    var b = ""
    for (var i=0; i<fvhundred; i++){
      b+= "D"
    }
    n %= 500
    result += b
    to_roman_old(n)
  }
  if(n>=400 && n<500){
    var nstring = n.toString()
    var frhundred = 1
    var bc = ""
    for (var i=0; i<frhundred; i++){
      bc+= "CD"
    }
    n %= 400
    result += bc
    to_roman_old(n)
  }
  if(n>=100 && n<400){
    var nstring = n.toString()
    var hundred = parseInt(nstring[0])
    var c = ""
    for (var i=0; i<hundred; i++){
      c+= "C"
    }
    n %= 100
    result += c
    to_roman_old(n)
  }
  if(n>=50 && n<100){
    var nstring = n.toString()
    var fvty = 1
    var d = ""
    for (var i=0; i<fvty; i++){
      d+= "L"
    }
    n %= 50
    result += d
    to_roman_old(n)
  }
  if(n>=40 && n<50){
    var nstring = n.toString()
    var frty = 1
    var de = ""
    for (var i=0; i<frty; i++){
      de+= "XL"
    }
    n %= 40
    result += de
    to_roman_old(n)
  }
  if(n>=10 && n<50){
    var nstring = n.toString()
    var ten = parseInt(nstring[0])
    var e = ""
    for (var i=0; i<ten; i++){
      e+= "X"
    }
    n %= 10
    result += e
    to_roman_old(n)
  }
  if(n>=5 && n<10){
    var nstring = n.toString()
    var five = 1
    var f = ""
    for (var i=0; i<five; i++){
      f+= "V"
    }
    n %= 5
    result += f
    to_roman_old(n)
  }
  if(n>=1 && n<5){
    var nstring = n.toString()
    var one = parseInt(nstring[0])
    var g = ""
    for (var i=0; i<one; i++){
      g+= "I"
    }
    n %= 1
    result += g
    to_roman_old(n)
  }
  return result
  }

function to_roman(n) {
  // your implementation code here
  var result = ""
  if(n>=1000){
    var nstring = n.toString()
    var thousand = parseInt(nstring[0])
    var a = ""
    for (var i=0; i<thousand; i++){
      a += "M"
    }
    n %= 1000
    result += a
    to_roman(n)
  }
  if(n>=500 && n<1000){
    var nstring = n.toString()
    var fvhundred = 1
    var b = ""
    for (var i=0; i<fvhundred; i++){
      b+= "D"
    }
    n %= 500
    result += b
    to_roman(n)
  }
  if(n>=400 && n<500){
    var nstring = n.toString()
    var frhundred = 1
    var bc = ""
    for (var i=0; i<frhundred; i++){
      bc+= "CD"
    }
    n %= 400
    result += bc
    to_roman(n)
  }
  if(n>=100 && n<400){
    var nstring = n.toString()
    var hundred = parseInt(nstring[0])
    var c = ""
    for (var i=0; i<hundred; i++){
      c+= "C"
    }
    n %= 100
    result += c
    to_roman(n)
  }
  if(n>=50 && n<100){
    var nstring = n.toString()
    var fvty = 1
    var d = ""
    for (var i=0; i<fvty; i++){
      d+= "L"
    }
    n %= 50
    result += d
    to_roman(n)
  }
  if(n>=40 && n<50){
    var nstring = n.toString()
    var frty = 1
    var de = ""
    for (var i=0; i<frty; i++){
      de+= "XL"
    }
    n %= 40
    result += de
    to_roman(n)
  }
  if(n>=10 && n<50){
    var nstring = n.toString()
    var ten = parseInt(nstring[0])
    var e = ""
    for (var i=0; i<ten; i++){
      e+= "X"
    }
    n %= 10
    result += e
    to_roman(n)
  }
  if(n>=9 && n<10){
    var nstring = n.toString()
    var nine = 1
    var ef = ""
    for (var i=0; i<nine; i++){
      ef+= "IX"
    }
    n %= 9
    result += ef
    to_roman(n)
  }
  if(n>=5 && n<9){
    var nstring = n.toString()
    var five = 1
    var f = ""
    for (var i=0; i<five; i++){
      f+= "V"
    }
    n %= 5
    result += f
    to_roman(n)
  }
  if(n>=4 && n<5){
    var nstring = n.toString()
    var fr = 1
    var fg = ""
    for (var i=0; i<fr; i++){
      fg+= "IV"
    }
    n %= 4
    result += fg
    to_roman(n)
  }
  if(n>=1 && n<4){
    var nstring = n.toString()
    var one = parseInt(nstring[0])
    var g = ""
    for (var i=0; i<one; i++){
      g+= "I"
    }
    n %= 1
    result += g
    to_roman(n)
  }
  return result
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("——---—|——-----———|——-—");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1454  | MCDLIII  | ", to_roman_old(1454));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));
console.log(`\n`);
console.log(`============================================`);
console.log(`\n`);
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——---—|——-----———|—--——");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
