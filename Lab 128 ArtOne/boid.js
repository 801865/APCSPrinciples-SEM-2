// boid class
class Boid{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.clr = color(random(255), random(255), random(255))
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
}
