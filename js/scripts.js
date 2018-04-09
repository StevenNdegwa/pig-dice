var player1 = new Player("Player1");
var player2 = new Player("Player2");

function Player(name) {
  this.name = name;
  this.score = 0;
}

Player.prototype.increaseScore = function(amount) {
  this.score += amount;
}

var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
};


var foo = function(bar) {
  "use strict";
  return false;
};

var sneakyPig = function() {
  "use strict";
  var bottom = $(window).height();
  var right = $(window).width();
