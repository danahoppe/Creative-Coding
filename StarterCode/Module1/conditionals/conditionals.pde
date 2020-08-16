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
    float t1 = random(0,1200);
    float t2 = random(0,1200);
    float t3 = random(0,1200);
    float t4 = random(0,1400);
    float t5 = random(0,1400);
    float t6 = random(0,1400);
    
    float r1 = random(0,width);
    float r2 = random(0,height);
    
    float s1 = random(0, 800);
    
    float h = random (0,10);
    float s = random (0,360);
    float b = random (0,360);
    
    float st1 = random(0,50);
    strokeWeight(st1);
    
    line(mouseX,mouseY,t2,r2);
    
    st1 = random(0,20);
    strokeWeight(st1);
    
    fill(h,s,b);
    triangle(t1,t2,t3,t4,t5,t6);
    
    h = random (0,360);
    s = random (0,360);
    b = random (0,360);
    
    st1 = random(0,20);
    strokeWeight(st1);
    
    fill(h,s,b);
    ellipse(r1,r2,s1,s1);

  }
}
//End of draw()
