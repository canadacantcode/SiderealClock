let angle = 0;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 220);
}

function draw() {
  background(15, 20, 40);
  frameRate(15);

  // Distant stars reference (top)
  stroke(200);
  strokeWeight(1);
  for (let x = 40; x < width; x += 60) {
    point(x, 30);
  }

  // Mars rotating in place (sidereal)
  push();
  translate(200, 120);
  rotate(angle);

  noStroke();
  fill(255, 120, 60);
  circle(0, 0, 40);

  stroke(255, 80, 80);
  line(0, 0, 0, -40);

  pop();

  fill(200);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  text("Fixed stars reference", 200, 18);

  angle += 2;
}
