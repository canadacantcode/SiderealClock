let angle = 0;
// If you actually have mars.png in THIS folder, this will load it.
// If you don't have mars.png, it's okay — it just won't be used.
let marsImg;

function preload() {
  // Optional image load (only works if mars.png exists in mars-sidereal/)
  // Comment this line out if you don't have the file.
  marsImg = loadImage("mars.png");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  frameRate(15);
}

function draw() {
  background(28, 28, 46);

  let sv = frameCount % 8;
  if (sv > 41) sv = frameCount % -8;

  stroke("orange");
  strokeWeight(sv);
  fill("yellow");
  circle(200, 0, 300);

  strokeWeight(sv + 5);
  circle(200, 0, 280);

  textSize(50);
  strokeWeight(10);
  stroke("white");
  fill("yellow");
  text("Sun", 150, 75);

  fill(255);
  noStroke();
  textSize(10);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);

  push();
  translate(200, 250);
  rotate(angle);

  fill("orange");
  stroke("red");
  strokeWeight(1);
  circle(0, 0, 75);
  line(0, 0, 0, 100);

  pop();

  textSize(20);
  stroke("black");
  strokeWeight(1);
  fill("orange");
  text("Mars", 178, 260);

  angle += 2;
}
