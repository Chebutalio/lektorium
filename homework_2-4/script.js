'use strict'
let Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = (Math.floor(Math.random() * 10)) - 5;
  this.ySpeed = (Math.floor(Math.random() * 10)) - 5;
  this.color = 'red';
};

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  ctx.fillStyle = this.color;
  circle(this.x, this.y, 10, true);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y <0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let ball = new Ball();

setInterval (function () {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ball.checkCollision();
  ctx.strokeRect(0, 0, width, height);
}, 30);