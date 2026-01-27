let aangle = 0;

let bangle = 0;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
}

function draw() {
  background(" rgb(28,28,46) ");
  frameRate(15); //set frame rate to 15
  sv = frameCount % 8;
  if (sv > 41) {
    sv = frameCount % -8;
  }
push();
  stroke("orange");
  strokeWeight(sv);
  fill("yellow");
  circle(200, 200, 50);
  cloudOneX = frameCount % width;

  textSize(20);
  strokeWeight(1);
  stroke("black");
  text("Sun", 183, 205);

  fill(255); //white text

  textSize(10);
  strokeWeight(0);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
pop();
  
  
push();
  translate(200, 200);
  if (aangle) {
    rotate(aangle);
  }

  stroke("black");
  fill("orange");
  circle(75, 75, 25);
  stroke("red");
  strokeWeight(1);
  line(0, 0, 0, 100);

  push();
  translate(75,75)
  rotate(bangle)
  fill("red");
  
  line(0, 0, 0, 50);
  
  pop();  
  
  
  push();
  translate(75,75)
  rotate(-aangle)
  translate(10, 10);
  textSize(20);
  fill("black");
  stroke("orange");
  strokeWeight(1);
  text("Mars", -30, -25);
  

  
  pop();
  
  pop();

 bangle = bangle +67;
  aangle = aangle + 2;
}
