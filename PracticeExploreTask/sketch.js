//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var num = 100;
var ball = [];
var sizeW = 10;
var sizeH = 10;
var state = 0;
var button, buttonHide, buttonLine, buttonTrail, buttonRainbow;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(num);
  loadButton();
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
    translate(400, 10);
    textSize(30);
    fill(250, 250, 250);
    text('Instructions:', 10, 20);
    textSize(20);
    translate(0, 25);
    text("Click each button to change what the image will be. Then click start to see the image.", 10, 20);
    translate(0, 25);
    text("The defult settings are: Balls are visible, lines appear when bals are near each other,", 10, 20);
    translate(0, 25);
    text("their color is black, there are 100 balls, and the balls have a trail.", 10, 20);

  pop();
  button.run();
}

function loadButton(){
  button = new Button(375, 675, 50, 50, "Start?", color(random(0, 255), random(0, 255), random(0, 255)));
  buttonHide = new Button( 200, 300, 50, 50, "Hide Ball", color(random(0, 255), random(0, 255), random(0, 255)));
  buttonLine =
  buttonTrail =
}
