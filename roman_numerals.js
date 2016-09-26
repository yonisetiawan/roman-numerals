
function to_roman_old(n) {
    var satuan;
    var puluhan;
    var ratusan;
    var ribuan;

    var tampungRoman = []
    ribuan = Math.floor(n/1000)
    ratusan = Math.floor((n%1000)/100)
    puluhan = Math.floor((n%100)/10)
    satuan = Math.floor((n%10)/1)

    // push ribuan
    for(var i=0;i<ribuan;i++){
      tampungRoman.push('M')
    }

    // push ratusan
    if(ratusan<3){
      for(var i=0;i<ratusan;i++){
        tampungRoman.push('C')
      }
    } else if(ratusan==5){
        tampungRoman.push('D')
    } else if(ratusan==9){
        tampungRoman.push('CM')
      }
      else if(ratusan==4){
        tampungRoman.push('CD')
      }
     else if(ratusan>5){
      tampungRoman.push('D')
      for(var i=0;i<ratusan-5;i++){
        tampungRoman.push('C')
      }
    }

    // push puluhan
    if(puluhan<3){
      for(var i=0;i<puluhan;i++){
        tampungRoman.push('X')
      }
    } else if(puluhan==5){
        tampungRoman.push('L')
    } else if(puluhan==9){
        tampungRoman.push('XC')
    }
    else if(puluhan==4){
      tampungRoman.push('XL')
    }
    else if(puluhan>5){
      tampungRoman.push('L')
      for(var i=0;i<puluhan-5;i++){
        tampungRoman.push('X')
      }
    }

    // push satuan
    if(satuan<5){
      for(var i=0;i<satuan;i++){
        tampungRoman.push('I')
      }
    } else if(satuan==5){
      tampungRoman.push('V')
    } else if(satuan>5){
      tampungRoman.push('V')
      for(var i=0;i<satuan-5;i++){
        tampungRoman.push('I')
      }
    }
    return tampungRoman.join("");
}


function to_roman(n) {

      var satuan;
      var puluhan;
      var ratusan;
      var ribuan;

      var tampungRoman = []
      ribuan = Math.floor(n/1000)
      ratusan = Math.floor((n%1000)/100)
      puluhan = Math.floor((n%100)/10)
      satuan = Math.floor((n%10)/1)

      // push ribuan
      for(var i=0;i<ribuan;i++){
        tampungRoman.push('M')
      }

      // push ratusan
      if(ratusan<3){
        for(var i=0;i<ratusan;i++){
          tampungRoman.push('C')
        }
      } else if(ratusan==5){
          tampungRoman.push('D')
      } else if(ratusan==9){
          tampungRoman.push('CM')
        }
        else if(ratusan==4){
          tampungRoman.push('CD')
        }
       else if(ratusan>5){
        tampungRoman.push('D')
        for(var i=0;i<ratusan-5;i++){
          tampungRoman.push('C')
        }
      }

      // push puluhan
      if(puluhan<3){
        for(var i=0;i<puluhan;i++){
          tampungRoman.push('X')
        }
      } else if(puluhan==5){
          tampungRoman.push('L')
      } else if(puluhan==9){
          tampungRoman.push('XC')
      }
      else if(puluhan==4){
        tampungRoman.push('XL')
      }
      else if(puluhan>5){
        tampungRoman.push('L')
        for(var i=0;i<puluhan-5;i++){
          tampungRoman.push('X')
        }
      }

      // push satuan
      if(satuan<=3){
        for(var i=0;i<satuan;i++){
          tampungRoman.push('I')
        }
      } else if(satuan==5){
          tampungRoman.push('V')
      } else if(satuan==9){
          tampungRoman.push('IX')
      }
      else if(satuan==4){
        tampungRoman.push('IV')
      }
      else if(satuan>5){
        tampungRoman.push('V')
        for(var i=0;i<satuan-5;i++){
          tampungRoman.push('I')
        }
      }
      return tampungRoman.join("");
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
