'use strict'

// ForEach

let arr = [1, 18, 23, 153, 222, 124, 9, 2212, 12]

Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func (this[i], i, this)
  }
}
arr.myForEach(function (item, i, arr) {
  console.log(item, i, arr)
})

// Map

Array.prototype.myMap = function (func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(func(this[i]));
  }
  console.log(newArr)
}
arr.myMap(function (elementArray) {
  return elementArray * 2
})

// Sort

Array.prototype.mySort = function () {
  let done = false
  let elem = 0
  while (!done) {
    done = true
    for (let i = 1; i < this.length; i++) {
      if (this[i - 1] > this[i]) {
        done = false
        elem = this[i - 1]
        this[i - 1] = this[i]
        this[i] = elem
      }
    }
  }
  return this
}

arr.mySort()
console.log(arr)