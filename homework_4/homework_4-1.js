'use strict'

function Animal (animal, name) {
  this.becomeBigger = function() {
    animal = animal.toUpperCase()
    console.log(`When you feed the ${animal} it becomes BIGGER!`)
  }

  this.lastName = function (surname) {
    name = name + ` ${surname}`
    console.log(`Full name of the ${animal} is ${name}.`)
  }
}

let animal = new Animal('Ондатра', 'Анатолий')

animal.becomeBigger()
animal.lastName('Братиславович')
