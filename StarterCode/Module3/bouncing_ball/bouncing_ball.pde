//Initialize variables
float position;
float velocity;
Ball ball_1;

//This function runs when the program first starts
void setup() {  
  size(1200, 1400);
  colorMode(HSB,360,100,100,100);
  background(360,360,360);
  
  //create ball object from ball class
  ball_1 = new Ball(100, 400, 2, 5);
}
//End of setup()

//This function runs continuously until the program ends
void draw() {
  background(255);
    
  //call ball functions move and show
  ball_1.move();
  ball_1.show();
}
//End of draw()
