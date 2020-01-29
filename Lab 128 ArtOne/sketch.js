//  Danny Ramirez
// 	1/28/20
//  This is a comment
//  The setup function function is called once when your program begins
boids = [];
var num = 100;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids(num);
}

//  The draw function is called @ 30 fps
function draw() {
  runBoids(num);
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-10, 10), random(-10, 10));
  }
}

function runBoids(n){
  for(var i = 0; i < n; i++){
      boids[i].run();
  }
}
