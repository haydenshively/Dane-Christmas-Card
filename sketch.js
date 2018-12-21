let contentHorizontalInset = 10;
let contentVerticalInset = 20;

var backgroundImage;
var swimmerImage, swimmerImageLeft, swimmerImageRight, dolphinImage;

var swimmerX, swimmerY, dolphinX, dolphinY;
var swimmerIsLeft = true;
var swimmerSpeed = 10;
let dolphinMaxSpeed = 3;


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

    dolphinY -= random(1, dolphinMaxSpeed)
  }else if (dolphinY - dolphinImage.height > 0) {
    rectMode(CENTER)
    fill(5, 5, 20)
    rect(width/2, height/2, width*2/3, height/3, 15, 15, 15, 15);
    fill(20, 255, 20)
    textAlign(CENTER, CENTER)
    textStyle(BOLD)
    textSize(32);
    text('Dane wins! Merry Christmas!', width/2, height/2, width*2/3, height/3)
  }else {
    rectMode(CENTER)
    fill(5, 5, 20)
    rect(width/2, height/2, width*2/3, height/3, 15, 15, 15, 15);
    fill(255, 20, 20)
    textAlign(CENTER, CENTER)
    textStyle(BOLD)
    textSize(32);
    text('Dolphin wins. Shake device to try again.', width/2, height/2, width*2/3, height/3)
  }
}

function windowResized() {
  resizeCanvas(windowWidth - contentHorizontalInset, windowHeight - contentVerticalInset);
  if (swimmerY > height) {swimmerY = height;}
}

function touchMoved() {
  return false;
}

function touchStarted() {
  swimmerIsLeft = !swimmerIsLeft;
  swimmerY -= swimmerSpeed;

  if (swimmerY - dolphinY > 20) {swimmerSpeed += 1;}
}

function deviceShaken() {
  swimmerY = height
  dolphinY = height

  swimmerSpeed = 10
}
