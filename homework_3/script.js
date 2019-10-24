'use strict'

function Animal (name) {
  this.name = name || 'Animal'
  this.hunger = 5
  this.thirst = 5
  this.sleeping = 5
  this.mood = 5
  this.training = 5
  this.healthy = 5
  const params = ['hunger', 'thirst', 'sleeping', 'mood', 'training', 'healthy']
  const messageFail = {
    hunger: 'I\'m so hungry, please feed me!',
    thirst: 'I want to drink, give me some water!',
    sleeping: 'Please, let me sleep!',
    mood: 'I\'m upset.',
    healthy: 'I\'m seek, help me!',
    training: 'I want to be smart, let\'s study'
  }

  this.state = function () {
    for (let i = 0; i < params.length; i++) {
      switch (this[params[i]]) {
        case 0:
          this[params[i]] = 0
        case 1:
          console.log(messageFail[params[i]])
          break
        case 2:
          console.log(messageFail[params[i]])
          break
        default:
          break
      }
    }
    if (this.hunger < 2 || this.sleeping < 2) {
      this.healthy--
    } else if (this.hunger > 8 && this.sleeping > 8) {
      this.healthy++
    }
    if (this.healthy <= 0) {
      console.log('RIP')
    }
  }
}

Animal.prototype.sleep = function () {
  if (this.sleeping > 8) {
    console.log('I don\'t want to sleep')
  } else {
    console.log('Good night! Zzzz...')
    this.hunger--
    this.thirst--
    this.sleeping++
    this.healthy++
  }
  this.state()
}

Animal.prototype.eat = function () {
  if (this.hunger > 8) {
    console.log('I\'m not hungry')
  } else {
    const r = Math.random()
    if (r > 0.2) {
      console.log('Oh, it\'s so tasty!')
      this.hunger++
      this.thirst--
      this.sleeping--
    } else {
      console.log('It\'s a poison')
    }
  }
  this.state()
}

Animal.prototype.drink = function () {
  if (this.thirst > 8) {
    console.log('I don\'t want drinks')
  } else {
    console.log('Thank\'s!')
    this.thirst++
    this.mood--
  }
  this.state()
}

Animal.prototype.play = function () {
  if (this.mood > 8) {
    console.log('I\'m so tired...')
  } else {
    console.log('This game was so awesome!')
    this.mood++
    this.sleeping--
  }
  this.state()
}

Animal.prototype.learn = function () {
  if (this.training > 8) {
    console.log('I\'m tired, please stop...')
  } else {
    console.log('It was very interesting')
    this.training++
    this.mood--
  }
  this.state()
}

Animal.prototype.health = function () {
  console.log('I become stronger')
  this.helthy += 3
  this.mood--
  this.sleeping--
  this.state()
}

Animal.prototype.help = function () {
  console.log('I have such opportunities: \n' +
    'I can sleep with the command - "sleep", \n' +
    'I can learn with the comand - "learn", \n' +
    'I can drink with the command - "drink", \n' +
    'I can eat with the command - "eat", \n' +
    'I can play with the command - "play", \n' +
    'I need to be stronger with the command - "health"'
  )
}

const animal = new Animal('Tim')
animal.help()
