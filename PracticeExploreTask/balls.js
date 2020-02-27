//balls.js
class Ball{
  constructor(x, y, w, h,){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(random(-1, 1), random(-1,1));
    this.w = w;
    this.h = h;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
  }

  run(){
    this.update();
    this.checkEdges();
    this.render();
  }

  checkEdges(){
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.y > height){
      this.loc.y = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = height;
    }
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    this.clr =  color(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.loc.x, this.loc.y, this.w, this.h);
  }
}
