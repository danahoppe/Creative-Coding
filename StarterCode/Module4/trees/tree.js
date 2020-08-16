class Tree {
  constructor(x, y, r, f) {
    this.x = x;
    this.y = y;
    this.f = f;
    
    this.a = 100;
    this.b = 15;
    this.c = 30;
    
    this.r = r;
    
    this.age = 0;
  }
  
  grow() {
    let choice = random(0,100);  
    
    if(choice < 35){
      this.x += this.f;
    }    
    else if(choice < 70){
      this.x -= this.f;  
    }
    else if(choice < 72){
      if(this.r - 1 > 0){
        let t = new Tree(this.x,this.y, this.r - 1, this.f - .5);
        t.a = this.a - 10;
        t.b = this.b + 15;
        t.c = this.c + 5;
        
        trees.push(t);
        this.age++
      }
      else{
        this.age++;  
      }
    }
    else if(choice < 85){
      this.y -= this.f;
    }  
    
    this.x = constrain(this.x,0, width);
    this.y = constrain(this.y,0, height);
  }
  
  show() {
    noStroke();
    fill(this.a,this.b,this.c);
    
    ellipse(this.x,this.y,this.r);
  }
}
