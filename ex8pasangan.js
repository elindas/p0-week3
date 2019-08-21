function pasanganTerbesar(num) {
  var numberString = num.toString();
  var newNumber = [];

  for (var i = 0; i < numberString.length - 1; i++) {
    var checkNumber = numberString[i] + numberString[i + 1];
    newNumber.push(Number(checkNumber));
  }

  newNumber.sort(function(a, b) {
    return b - a;
  });
  
  var terbesar = newNumber[0];
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
