let contentHorizontalInset = 10;
let contentVerticalInset = 20;
var backgroundImage;

function preload() {
  backgroundImage = loadImage('assets/lane_lines.jpg')
}

function setup() {
  // put setup code here
  createCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset)
  background(0, 0, 0)
  background(backgroundImage, [255])
}

function draw() {
  // put drawing code here
  // ellipse(50, 50, 80, 80)
  if (mouseIsPressed) {
    fill(0)
  }else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 80, 80)
}

function windowResized() {
  resizeCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset)
}
