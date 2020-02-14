//particle.js
class Particle{
  consturctor(loc){
    this.loc = loc;
    this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
		this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.rad = random(11, 22);
    this.lifeSpan = random(200);
    var r = random(255);
    var g = this.lifeSpan(200);
    var b = random(255);
    this.clr = color(r, g, b);
    this.fclr = color(r, g, b, 10);
    this.orbitals = [];
    this.loadOrbitals(1);
    this.angle = random(TWO_PI);

}

  loadOrbitaks(n){
    for(var i = 0; i < n; i++){
      this.orbitals.push(newOrbital(5, color(128, 68, 40)));
    }
  }

	run(){
		this.update();
		this.render();
	}

	update(){
		if(toggle === 1){
			this.vel.add(this.acc);
			this.vel.limit(55);
			this.loc.add(this.vel);
			this.lifeSpan -= 1;
			this.rad += 0.02;
			this.angle += 0.41;
		}
	}

	render(){
		strokeweight(0.25);
		stroke(this.clr);
		fill(20, 90, 100, 60);
		ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
		for(var i = 0; i < this.orbiters.lenght; i++){
      var ox = this.loc.x + 30*cos(this.angle);
      var oy = this.loc.y + 30*sin(this.angle);
      fill(255, 0, 0);
      ellipse(ox, oy, 5, 5);
    }
  }
}// end of particle.js
