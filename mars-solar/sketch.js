let orbitAngle = 0;
let spinAngle = 0;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 220);
}

function draw() {
  background(15, 20, 40);
  frameRate(15);

  // Sun
  fill(255, 200, 80);
  noStroke();
  circle(200, 110, 40);

  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Sun", 200, 110);

  // Mars orbiting
  push();
  translate(200, 110);
  rotate(orbitAngle);

  fill(255, 120, 60);
  circle(80, 0, 20);

  // Mars rotation hand (solar)
  push();
  translate(80, 0);
  rotate(spinAngle);
  stroke(255, 80, 80);
  line(0, 0, 0, -20);
  pop();

  pop();

  orbitAngle += 2;
  spinAngle += 67;
}
