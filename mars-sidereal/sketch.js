let angle = 0;



function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
}

function draw() {
  
  let marsImg;

function preload() {
  marsImg = loadImage("mars.png"); // exact filename!
}
  
  background(" rgb(28,28,46) ");
  frameRate(15); //set frame rate to 15
  sv = frameCount % 8;
  if (sv > 41) {
    sv = frameCount % -8;
  }

  stroke("orange");
  strokeWeight(sv);
  fill("yellow");
  circle(200, 0, 300);
  cloudOneX = frameCount % width;

  stroke("");
  strokeWeight(sv + 5);
  fill("yellow");
  circle(200, 0, 280);
  cloudOneX = frameCount % width;

  textSize(50);
  strokeWeight(10);
  stroke("white");
  text("Sun", 150, 75);

  fill(255); //white text

  textSize(10);
  strokeWeight(0);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);

  push();
  translate(200, 250);
  if (angle) {
    rotate(angle);
  }
  fill("orange");
  circle(0, 0, 75);
  stroke("red");
  strokeWeight(1);
  ellipseMode(CENTER);
  line(0, 0, 0, 100);


  pop();

  textSize(20);
  stroke("black");
  strokeWeight(1);
  text("Mars", 178, 260);

  angle = angle + 2;
}
