//balls.js
class Ball{
  constructor(x, y, w, h,){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  }

  run(){
    this.checkEdges();
    this.render();
  }

  checkEdges(){
    if(this.loc.x > 800){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.x < 0){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.y > 800){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.y < 0){
      this.loc.x = -this.loc.x;
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.h);
  }
}
