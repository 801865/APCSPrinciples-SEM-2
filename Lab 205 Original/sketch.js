//  Danny Ramirez
// 	2/5/20
//  This is a comment
//  The setup function function is called once when your program begins

// By Roni Kaufman

let particles = [];
let squiggliness = 1/100;
let hu = 0;
let hshift;

function setup() {
  createCanvas(windowWidth, screen.availHeight);
  colorMode(HSB, 255);
  stroke(90, 100);
	noFill();
  hshift = random(.001);
  background(10);
  //updateParticles(0.1, 0);
}

function draw() {
	beginShape();
  for (let p of particles) {
    p.draw();
    p.move();
  }
	endShape();
	if (frameCount < 632.01) {
		updateParticles(1, frameCount/100);
	} else if (frameCount > 1000) {
		noLoop();
	}
}

function updateParticles(r, theta0) {
  //particles = [];
	//let r = 100;
	let n = 1;
  for (let i = 0; i < n; i++) {
		let theta = theta0 + map(i, 0, n, -PI, PI);
    let x_ = width/2 + r*cos(theta);
    let y_ = height/2 + r*sin(theta);
		let s_ = 1;
    //let c_ = color(random(50, 60), random(90, 100), random(90, 100), 100);
		let c_ = color(95);
    particles.push(new Particle(x_, y_, s_, c_));
  }
}

function Particle(x_, y_, s_, c_) {
  this.x = x_;
  this.y = y_;
  this.size = s_;
  this.c = c_;

  this.alpha = 100;
  this.dist = 10;

  this.move = function() {
		let theta = atan2(this.y - height/2, this.x - width/2);
		theta += noise(this.x * squiggliness, this.y * squiggliness)*2;
    let v = p5.Vector.fromAngle(theta, this.dist);
    this.x += v.x;
    this.y += v.y;
    //this.dist *= 0.999;
    //this.alpha *= 0.9;
		//this.size *= 0.999;
  }

  this.draw = function() {
    this.c.setAlpha(this.alpha);
		stroke(hu, 255, 255, this.alpha * 255);
		hu+=hshift;
		if (hu > 255) {
			hu= 0;
			hshift = random(.01);
		}
    //fill(this.c);
    //circle(this.x, this.y, this.size);
		curveVertex(this.x, this.y);
    this.c.setAlpha(100);
  }
}

function mousePressed(){
	save('pix.jpg');
}
