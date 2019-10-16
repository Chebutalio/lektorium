'use strict'

let arr1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
let arr2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
let arr3 = [7, 0, 1, 3, 4, 1, 2, 1] // 9
let arr4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
let arr5 = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
let arr6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
let arr7 = [2, 2, 2, 2, 2] // 0

function myFunction(array) {
  let minNumber = array[0];
  let maxNumber = array[0];
  let water = 0;
  array.forEach(function (el) {
    if (el > maxNumber) {
      maxNumber = el;
    }
    if (el < minNumber) {
      minNumber = el;
    }
  });
  if (minNumber < maxNumber) {
    for (let k = minNumber; k <= maxNumber; k++) {
      let i = 0;
      while (array[i] <= k) {
        array.shift();
      }
      array.reverse();
      let s = 0;
      while (array[s] <= k) {
        array.shift();
      }
      array.reverse();
      array.map(function (elem) {
        if (elem <= k) {
          ++water;
        }
      })
    }
  }
  console.log(water);
}

myFunction(arr1);
myFunction(arr2);
myFunction(arr3);
myFunction(arr4);
myFunction(arr5);
myFunction(arr6);
myFunction(arr7);