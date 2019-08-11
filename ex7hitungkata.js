
function hitungJumlahKata(kalimat) {
  
  var arrKata = kalimat.split(' ')
  
  i=0
  while (i < arrKata.length) {
    i++
  }
  return i
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5