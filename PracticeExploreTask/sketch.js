//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var num = 10;
var ball = [];
var sizeW = 100;
var sizeH = 100;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(num);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 5);
  runBalls(num);
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    ball[i] = new Ball(400, 400, sizeW, sizeH);
  }
}

function runBalls(n){
  for(var i = 0; i < n; i++){
    ball[i].run();
  }
}
