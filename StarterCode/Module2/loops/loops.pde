//Welcome to Creative Coding!
//Change numbers, copy and paste, and play around!

float x;
float y;
float s;

color c;
color b;

void setup() {  
  size(1200, 1400);
  colorMode(HSB,360,100,100);
  background(0,0,360);
  
  x = 0;
  y = 400;
  s = 50;
  c = color(100,50,50);
  b = color(200,90,90);
  
  for(int i=0; i<=600; i+=s){
    fill(b);
    ellipse(i, y - 100, s, s);
  }
  
  for(int i=0; i<=400; i+=s){
    for(int j=0; j<=200; j+=s){
      fill(b);
      ellipse(i, j, s, s);
    }
  }
}
//End of setup()

//This function runs continuously until the program ends
void draw() {
  fill(c);
  ellipse(x, y, s, s);
  ellipse(x + 50, y, s, s);
  ellipse(x + 100, y, s, s);
  ellipse(x + 150, y, s, s);
  ellipse(x + 200, y, s, s);
  ellipse(x + 250, y, s, s);
  ellipse(x + 300, y, s, s);
}
//End of draw()
