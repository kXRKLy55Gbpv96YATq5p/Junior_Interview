function compareArrays(arr1, arr2) {
  // Ваш код
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter(val => val >= 0 && val % 3 === 0)
    .map(val => val * 10);

  return resultArr; // array
}
