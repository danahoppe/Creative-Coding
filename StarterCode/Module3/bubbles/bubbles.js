let bubbles = [];
let x = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(x);
  for(let i = 0; i < 2000; i++){
    let x = random(width);
    let y = random(height);
    let s = random(30 % 500, 50 % 500);
               
    let b = new Bubble(x, y, s);
    bubbles.push(b);
  }
}

function doubleClicked() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function mousePressed() {
    let x = mouseX;
    let y = mouseY;
    let s = random(30, 50);
               
    let b = new Bubble(x, y, s);
    bubbles.push(b);    
}

function draw() {
  background(x);
  for(var b of bubbles){
    b.move();
    b.show();
    b.flee(mouseX,mouseY);
  }
}
