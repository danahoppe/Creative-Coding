let trees = [];
let age = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for(t of trees){
    if(t.age < age){
      t.grow();
      t.show();
    }
    // if(trees.length > 5000){
    //   trees.splice(trees.length - 10,10);
    // }
  }
}

function mousePressed() {
  let t = new Tree(mouseX,mouseY, 12, 6);
  trees.push(t);
}
