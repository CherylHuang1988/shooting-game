const game = new Game();

function setup() {
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.preload();
}

function keyPressed() {
  game.keyPressed();
}

function draw() {
  clear();
  game.draw();
}