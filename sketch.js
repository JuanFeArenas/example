/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}
let vari = 12;
const foo = "p5*";
function draw() {
  background(4, 70, 23);
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(360);
  textStyle(BOLD);
  textSize(150);
  vari++;
  text(foo, 60, 250);
  circle(30, 30 + vari, 20);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
