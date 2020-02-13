//  Danny Ramirez
// 	2/5/20
//  This is a comment
//  The setup function function is called once when your program begins

// By Roni Kaufman
var startScreen;
var mode = 0;
var sliderRed, sliderGreen, sliderBlue, sliderText;
let particles = [];
let squiggliness = 1/100;
let hu = 0;
let hshift;
var r = 0;
var g = 0;
var b = 0;
var button;
var b = 220;
var theta, x_, y_, s_, c_;
var rainbow;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  colorMode(HSB, 255);
  stroke(90, 100);
	noFill();
  hshift = random(.001);
  background(b);
  sliderText = createP("Move the slider to change the color of the image. The first slider is red, the second is green, and the third is blue.");
  sliderText.position(width/2 + 200, height/2 - 100);
  sliderRed = createSlider(0, 255, 0);
  sliderRed.position(width/2 + 480, height/2 - 50);
  sliderGreen = createSlider(0, 255, 0);
  sliderGreen.position(width/2 + 480, height/2);
  sliderBlue = createSlider(0, 255, 0);
  sliderBlue.position(width/2 + 480, height/2 + 50);
  loadButton();
  //updateParticles(0.1, 0);
}

function draw() {
  if(mode === 0){
    startScreen();
  } else if(mode === 1) {
    sliderText.position(10000, 10000);
    sliderRed.position(10000, 10000);
    sliderBlue.position(10000, 10000);
    sliderGreen.position(10000, 10000);
    beginShape();
    for (let p of particles) {
      p.draw();
      p.move();
    }
    endShape();
    if (frameCount < 10000) {
      updateParticles(1, frameCount/100);
    } else if (frameCount > 1000) {
      //noLoop();
    }
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
    //this.c.setAlpha(this.alpha);
		stroke(hu, 255, 255, this.alpha * 255);
		hu+=hshift;
		if (hu > 255) {
			hu= 0;
			hshift = random(.01);
		}
    fill(color(255, 255, 255))
    fill(this.c);
    //ellipse(this.x, this.y, this.size);
    fill(255, 255, 255);
    fill(this.c);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    //circle(this.x, this.y, this.size);
		curveVertex(this.x, this.y);
    //this.c.setAlpha(100);
  }
}

function updateParticles(r, theta0) {
  //particles = [];
	//let r = 100;
	let n = 1;
  for (let i = 0; i < n; i++) {
		theta = theta0 + map(i, 0, n, -PI, PI);
    x_ = width/2 + r*cos(theta);
    y_ = height/2 + r*sin(theta);
		s_ = 1;
    //c_ = color(random(50, 60), random(90, 100), random(90, 100), 100);
		c_ = color(r, g, b);
    if(rainbow === true){
      r = random(0, 255);
      b = random(0, 255);
      g = random(0, 255);
    }
    //let c_ = color(random(50, 60), random(90, 100), random(90, 100), 100);
    c_ = color(r, g, b);
    particles.push(new Particle(x_, y_, s_, c_));
  }
}

//function mousePressed(){
	//save('pix.jpg');
//}
function startScreen(){
  r = sliderRed.value();
  g = sliderGreen.value();
  b = sliderBlue.value();
  fill(color(r, g, b));
  ellipse(width/2 - 10, height/2 + 100, 100, 100);
  button.run();
  button2.run();
}

function loadButton(){
  button = new Button(width/2 - 60, height/2 + 200, 100, 50, 'See image?', color(random(255), random(255), random(255)));
  button2 = new Button(width/2 - 60, height/2 + 300, 100, 50, 'Rainbow?', color(random(255), random(255), random(255)));
}//makes a button
