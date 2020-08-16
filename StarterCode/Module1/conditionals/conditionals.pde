//Welcome to Creative Coding!
//Change numbers to figure out what the variables do.

//This function runs when the program first starts
void setup() {  
  size(1200, 1400);
  colorMode(HSB,360,100,100,100);
  background(360,360,360);
}
//End of setup()

//This function runs continuously until the program ends
void draw() {
  //background(360,0,100);
  
  if(mousePressed){
    float a = random(0,1200);
    float b = random(0,1200);
    float c = random(0,1200);
    float d = random(0,1400);
    float e = random(0,1400);
    float f = random(0,1400);
    
    fill(random(0,360),360,360);
    triangle(a,b,c,d,e,f);

  }
}
//End of draw()
