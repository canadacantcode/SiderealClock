let aangle = 0;
let bangle = 0;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  frameRate(15);
}

function draw() {
  background(28, 28, 46);

  let sv = frameCount % 8;
  if (sv > 41) sv = frameCount % -8;

  // Sun
  push();
  stroke("orange");
  strokeWeight(sv);
  fill("yellow");
  circle(200, 200, 50);

  textSize(20);
  strokeWeight(1);
  stroke("black");
  fill("yellow");
  text("Sun", 183, 205);

  fill(255);
  noStroke();
  textSize(10);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  pop();

  // Orbit + Mars spin
  push();
  translate(200, 200);
  rotate(aangle);

  stroke("black");
  fill("orange");
  circle(75, 75, 25);

  stroke("red");
  strokeWeight(1);
  line(0, 0, 0, 100);

  // Mars rotation line
  push();
  translate(75, 75);
  rotate(bangle);
  stroke("red");
  line(0, 0, 0, 50);
  pop();

  // Label stays readable
  push();
  translate(75, 75);
  rotate(-aangle);
  translate(10, 10);
  textSize(20);
  fill("black");
  stroke("orange");
  strokeWeight(1);
  text("Mars", -30, -25);
  pop();

  pop();

  bangle += 67;
  aangle += 2;
}
