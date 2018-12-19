let contentHorizontalInset = 10;
let contentVerticalInset = 20;

var backgroundImage;
var swimmerImageLeft, swimmerImageRight, dolphinImage;

var swimmerX, swimmerY, dolphinX, dolphinY;


function preload() {
  backgroundImage = loadImage('assets/lane_lines.jpg');
  swimmerImageLeft = loadImage('assets/swimmer_left.jpg');
  swimmerImageRight = loadImage('assets/swimmer_right.jpg');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset);
  background(backgroundImage, [255]);

  swimmerX = width*3/4
  dolphinX = width*2/4

  swimmerY = height
  dolphinY = height
}

function draw() {
  // put drawing code here
  // if (mouseIsPressed) {
  //   fill(0)
  // }else {
  //   fill(255)
  // }
  // ellipse(mouseX, mouseY, 80, 80)

  image(swimmerImageLeft, swimmerX, swimmerY)
}

function windowResized() {
  resizeCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset)
  if (swimmerY > height) {
    swimmerY = height
  }
}

function touchMoved() {
  return false
}
