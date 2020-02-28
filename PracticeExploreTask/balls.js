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
    this.checkEdges2();
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

  checkEdges2(){
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

  update(){
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.loc.add(this.vel);
  }

  render(){
    //fill(this.clr);
    //this.clr =  color(random(0, 255), random(0, 255), random(0, 255));
    //ellipse(this.loc.x, this.loc.y, this.w, this.h);
    stroke(this.clr);
    var distToBall = 0;
    for(var j = 0; j < ball.length - 1; j++){
      distToBall = this.loc.dist(ball[j].loc);
      if(distToBall < 50){
        line(this.loc.x, this.loc.y, ball[j].loc.x, ball[j].loc.y);
      }
    }
  }
}
