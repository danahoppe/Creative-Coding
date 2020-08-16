let x = 800;
let y = 200;
let incr = 50;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

//Load in image - must be uploaded in files
function preload() {
  myImage = loadImage('starrynight.jpg');
}

function draw() {
  
  //Retrieve Pixel Color
  let x1 = map(x, 0, width, 0, myImage.width);
  let y1 = map(y, 0, height, 0, myImage.height);
  let c = myImage.get(x1, y1);
  
  //Create ellipse
  fill(c);
  noStroke();
  ellipse(x, y, size, size);
  
  //Move in random direction
  x += random(-incr, incr);
  y += random(-incr, incr);
  
  //Constrain to the limits of the screen
  x = constrain(x,99,myImage.width);
  y = constrain(y,100,myImage.height);
}
