let contentHorizontalInset = 10;
let contentVerticalInset = 20;
let swimmerSwitchFrameRate = 1000;

var backgroundImage;
var swimmerImage, swimmerImageLeft, swimmerImageRight, dolphinImage;

var swimmerX, swimmerY, dolphinX, dolphinY;
var swimmerIsLeft = true;
var loopCount = 0;


function preload() {
  backgroundImage = loadImage('assets/lane_lines.jpg');
  swimmerImageLeft = loadImage('assets/swimmer_left.png');
  swimmerImageRight = loadImage('assets/swimmer_right.png');
  dolphinImage = loadImage('assets/dolphin.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset);
  background(backgroundImage, [255]);

  swimmerX = width*2/4 + width/8;
  dolphinX = width*1/4 + width/8;

  swimmerY = height
  dolphinY = height
}

function draw() {
  // put drawing code here
  background(backgroundImage, [255]);

  if (swimmerY - swimmerImageLeft.height > 0) {
    var swimmerImage;
    if (swimmerIsLeft) {swimmerImage = swimmerImageLeft;}
    else {swimmerImage = swimmerImageRight;}

    image(swimmerImage, swimmerX - swimmerImage.width/2, swimmerY - swimmerImage.height)
    image(dolphinImage, dolphinX - dolphinImage.width/2, dolphinY - dolphinImage.height)

    dolphinY -= 2
  }else {
    text('You win!')
    ellipse(mouseX, mouseY, 80, 80)
  }
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

function touchStarted() {
  swimmerIsLeft = !swimmerIsLeft
  swimmerY -= 10
}
