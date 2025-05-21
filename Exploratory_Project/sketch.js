let game

function setup() {
  createCanvas(800, 600);
  game = new Game()
}

function draw() {
  background(220);
  game.update()
  game.draw()
}