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

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(2);
  }

  render(){
    var distToBoid = 0;
    for(var j = 0; j < boids.length - 1; j++){
      distToBoid = boid[j].loc.dist(boid[j + 1].loc);
      if(distToBoid < 100){
        line(boid[j].x, boid[j].y, boid[j + 1].x, boid[j+1].y)
      }
    }
  }
}
