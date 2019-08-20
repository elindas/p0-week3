function targetTerdekat(arr) {
  var indeksO = arr.indexOf("o");
  var indeksX = [];
  var selisih = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      indeksX.push(i);
    }
  }

  for (var j = 0; j < indeksX.length; j++) {
    selisih.push(Math.abs(indeksX[j] - indeksO));
  }
  selisih.sort();
  var nearestTarget = selisih[0];

  if (indeksO === -1) {
    return "Invalid";
  } else if (selisih.length === 0) {
    return 0;
  }

  return nearestTarget;
}

// TEST CASES
console.log(targetTerdekat(["", "", "o", "", "", "x", "", "x"])); // 3
console.log(targetTerdekat(["o", "", "", "", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", "", "", "", "x", "x", "o", ""])); // 1
console.log(targetTerdekat(["", "", "o", ""])); // 0
console.log(targetTerdekat(["", "o", "", "x", "x", "", "", "x"])); // 2
