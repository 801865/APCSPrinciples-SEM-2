//  Danny Ramirez
// 	Lab 213 vOrbitals
//  This is a comment
//  The setup function function is called once when your program begins
//var x, y;
//var speedX, speedY;
var particles = [];
var toggle;
var count;

function setup() {
  //x = 0;
  //y = 0;
  //speedX = 1;
  //speedY = 1;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(15);
  toggle = 1;
  count = 0;
  //fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  //x = x + speedX;
  //y = y + speedY;
  //fill(0, 250, 0);
  //ellipse(x, y, 50, 50);
  //fill(250, 0, 0);
  //ellipse(-x + 800, y, 50, 50);
  //ellipse(0, y, 50, 50);
  count++;
  if(count > 50000){
    count = 0;
  }

  if(particles.length < 20 && count === 0){
    loadParticle();
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].run();
    if(particles[i].lfeSpan < 0){
     particles.splice(i, 1);
   }
 }
}
