//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var num = 100;
var ball = [];
var sizeW = 10;
var sizeH = 10;
var state = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(num);
}

//  The draw function is called @ 30 fps
function draw() {
  if(state === 0){
    startImage();
  }

  if(state === 1){
    runBalls(num);
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    ball[i] = new Ball(width/2, height/2, sizeW, sizeH);
  }
}

function runBalls(n){
  for(var i = 0; i < n; i++){
    ball[i].run();
  }
}

function startImage(){
  push();
    textAlign(CENTER);
    translate(450, 200);
    textSize(30);
    fill(250, 250, 250);
    text('Instructions:', 10, 20);
    textSize(20);
    translate(0, 25);
    text('Click each button to change what the image will be.', 10, 20);
    translate(0, 25);
    text("If you crash into the wall or the tail of the snake, it's game over!", 10, 20);
    //rules of game above
  pop();
}
