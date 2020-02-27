//  Danny Ramirez
// 	Lab 213 Orbitals
//  This is a comment
//  The setup function function is called once when your program begins
var particles = [];
var toggle;
var count;
num = 100;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(15);
  toggle = 1;
  count = 0;
  loadParticles(num);
}

//  The draw function is called @ 30 fps
function draw() {
  background(15);
  count++;
  if(count > 100){
    count = 0;
  }

  if(count%3 === 0 && particles.length < 1000){
    runParticles(num);
  }
}

function loadParticles(n){
  for(var i = 0; i < n; i++){
    particles[i] = new Particle(width/2, height/2);
    if(particles[i].lifeSpan < 0){
      particles.splice(i, 1);
    }
    //particles[i].run();
  }
}

function runParticles(n){
  for(var i = 0; i < n; i++){
    particles[i].run();
    if(particles[i].lifeSpan < 0){
      particles.splice(i, 1);
    }
  }
}
