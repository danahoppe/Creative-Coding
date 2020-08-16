class Ball {
  float [] position = new float [2];
  float [] velocity = new float [2];
  
  float r;
  float hue;
  float sat;
  float bri;
    
  //creates a ball object from position and velocity values
  Ball(float x, float y, float v, float z) {
    position[0] = x;
    position[1] = y;
    velocity[0] = v;
    velocity[1] = z;
    
    //radius of ball
    this.r = 100;
    
    //color values of ball
    this.hue = 255;
    this.sat = 100;
    this.bri = 255;
  }
  
  //moves the ball according to its velocity
  public void move(){    
    position[0] += velocity[0];
    position[1] += velocity[1];
    
    //If ball hits bottom edge, x velocity is reversed
    if ((position[0] > width) || (position[0] < 0)) {
      velocity[0] = velocity[0] * -1;
    }
    //If ball hits top edge, y velocity is reversed
    if ((position[1] > height) || (position[1] < 0)) {
      velocity[1] = velocity[1] * -1;
    }
  
  }

  //displays the ball on the screen
  public void show(){
    stroke(0);
    strokeWeight(2);
    fill(hue,sat,bri);
    ellipse(position[0], position[1], this.r, this.r);
  }
  
}
