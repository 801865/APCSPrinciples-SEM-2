//rotator class
class Rotator{
  constructor(x, y, h, w, clr, dx, dy){
    this.loc = createVector(x, y);
    this.h = h;
    this.w = w;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.vel = createVector(dx, dy);
    this.acc = createVector(0.1, 0.1);
  }

  run(){
    this.update();
    this.checkEdges();
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(2);
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.acc.mult(0);
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.acc.mult(0);
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.acc.mult(0);
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.acc.mult(0);
      this.vel.y = -this.vel.y;
    }
  }
}
