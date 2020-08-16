class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.b = 0;
    this.c = 0;
  }

  move() {
    let m = 10;
    if(this.x < width && this.x > 0){
      this.x = this.x + random(-5, 5);
    }
    else{
      if(this.x <= 0){
        this.x +=m;
      }
      else{
        this.x -=m;
      }
    }
    if(this.y < height && this.y > 0){
      this.y = this.y + random(-5, 5);
    }
    else{
      if(this.y <= 0){
        this.y +=m;
      }
      else{
        this.y -=m;
      }
    }
  }

  show() {
    noStroke();
    strokeWeight(1);
    fill(this.b, this.c, 0);
    ellipse(this.x, this.y, this.r, this.r);
  }
  
  intersect(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < (this.r/2 + other.r/2));
  }

  flee(px, py) {
    let d = dist(px, py, this.x, this.y);
    if(d < (this.r + 100)){
      if(this.x < width && this.x > 0){
        if(this.x < px){
          this.x -= 10;
          this.b+=10;
        }
        else{
          this.x += 10;
          this.b-=10;
        }
      }
      if(this.y < height && this.y > 0){
        if(this.y < py){
          this.y -= 10;
          this.c+=10;
        }
        else{
          this.y += 10;
          this.c-=10;
        }
      }
    }
  }
  
}
