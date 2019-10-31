'use strict'

Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      newArray[newArray.length] = this[i]
    }
  }
  return newArray
}

function coordFinder (r, c, r0, c0) {
  const result = []
  const step = Math.max(r, c) + 3

  result[result.length] = [r0, c0]
  r0 += 1
  result[result.length] = [r0, c0]
  c0 -= 1
  result[result.length] = [r0, c0]
  for (let i = 2; i <= step; i += 2) {
    for (let j = 1; j <= i; j++) {
      r0 -= 1
      result[result.length] = [r0, c0]
    }
    for (let j = 1; j <= i; j++) {
      c0 += 1
      result[result.length] = [r0, c0]
    }
    for (let j = 0; j <= i; j++) {
      r0 += 1
      result[result.length] = [r0, c0]
    }
    for (let j = 0; j <= i; j++) {
      c0 -= 1
      result[result.length] = [r0, c0]
    }
  }
  const filter = result.myFilter(function (result) {
    if ((result[0] >= 0 && result[0] < r) && (result[1] >= 0 && result[1] < c)) {
      return true
    }
  })
  console.log('rezult', filter)
}

coordFinder(5, 5, 4, 4)
