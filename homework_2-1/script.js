let arr = [2, 1, -5, 0, 3, 4, 7, 2, 32, 1, 0];
let result = arr.reduce(function (sum, current) {
  return sum + current;
}, 0);
let obj = {};

function MaxMinReplace(arr) {
  maxElem = arr[0];
  minElem = arr[0];
  let minIndex = 0;
  let maxIndex = 0;
  arr.forEach(function (item, index) {
    if (maxElem < item) {
      maxElem = item;
      maxIndex = index;

    } else if (minElem > item) {
      minElem = item;
      minIndex = index;
    }
  });
  arr[maxIndex] = minElem;
  arr[minIndex] = maxElem;
  obj.maxElem = maxElem;
  obj.minElem = minElem;
  return arr;
}

obj.sum = result;

MaxMinReplace(arr);
console.log("sum: " + result + ", max: " + maxElem + ", min: " + minElem + ", replased array: " + arr);
console.log(obj);