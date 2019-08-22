function tentukanDeretGeometri(arr) {
  var hasilBagi = arr[1] / arr[0];
  var result;

  for (i = 2; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== hasilBagi) {
      result = false;
    } else {
      result = true;
    }
  }

  if (result === undefined) {
    return false;
  }

  return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
