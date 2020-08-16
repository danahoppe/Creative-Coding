// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

var cells = [];
var replicate = [];
var incr = 8;
var test = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //frameRate(100);
  
  for(i = 0; i < width; i +=incr){
    cells[i] = [];
    for(j = 0; j < height; j += incr){
      cells[i][j] = floor(random(0,1.2));
    }
  }
  for(i = 0; i < width; i +=incr){
    replicate[i] = [];
    for(j = 0; j < height; j += incr){
      replicate[i][j] = 0;
    }
  }
  
}

function draw() {
  background(255);
  
  for(i = 0; i < width; i += incr){
    for(j = 0; j < height; j += incr){
      if(cells[i][j]==0){
        fill(255);
      }
      else{
        fill(0);
      }
      noStroke();
      rect(i-incr,j-incr,incr,incr);
      
      numlive = 0;
      
      if(i+incr < width && i-incr>0 && j+incr<height && j- incr > 0){
        numlive += cells[i+incr][j];
        numlive += cells[i+incr][j+incr];
        numlive += cells[i+incr][j-incr];
        numlive +=  cells[i-incr][j+incr];
        numlive +=  cells[i-incr][j-incr];        
        numlive +=  cells[i-incr][j];
        numlive +=  cells[i][j+incr];
        numlive += cells[i][j-incr];
      }
    
      //textSize(32);
      //fill(255);
      //text(str(numlive), i - incr, j);
      
      if(cells[i][j] == 0){
        if(numlive == 3){
          replicate[i][j] = 1;
        }
      }
      else if(cells[i][j] == 1){
        if(numlive < 2){
          replicate[i][j] = 0;
          test += 1;
        }
        else if(numlive == 2 || numlive == 3){
          replicate[i][j] = 1;
        }
        else if(numlive > 3){
          replicate[i][j] = 0;
        }
      }
    }
  }
    for(i = 0; i < width; i +=incr){
      for(j = 0; j < height; j += incr){
        cells[i][j] = replicate[i][j];
      }
    }
}
