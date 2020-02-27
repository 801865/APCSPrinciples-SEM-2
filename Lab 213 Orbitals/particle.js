//particle.js
class Particle{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.acc = createVector(0, 0);
    this.rad = random(11, 22);
    this.lifeSpan = 1000;
    var r = random(255);
    var g = this.lifeSpan%255;
    var b = random(255);
    this.clr = color(r, g, b);
    this.fclr = color(r, g, b, 10);
    this.orbitals = [];
    this.loadOrbitals(1);
    this.angle = random(TWO_PI);
}

  loadOrbitals(n){
    for(var i = 0; i < n; i++){
      this.orbitals.push(new Orbital(5, color(120, 90, 40)));
    }
  }

	run(){
		this.update();
		this.render();
	}

	update(){
		if(toggle === 1){
      this.angle += 0.01;
      for(var i = 0; i < this.orbitals.length; i++){
        this.orbitals[i].loc.x = this.loc.x + 30*cos(this.angle);
        this.orbitals[i].loc.y = this.loc.y + 30*sin(this.angle);
      }
			this.vel.add(this.acc);
			this.vel.limit(55);
			this.loc.add(this.vel);
			this.lifeSpan -= 1;
			this.rad += 0.02;
			this.angle += 0.41;
		}
	}

	render(){
		strokeWeight(0.25);
		stroke(this.clr);
		fill(20, 90, 100, 60);
		ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    for(var i = 0; i < this.orbitals.length; i++){
      ellipse(this.orbitals[i].loc.x, this.orbitals[i].loc.x, 5, 5)
    }
  }
}// end of particle.js
