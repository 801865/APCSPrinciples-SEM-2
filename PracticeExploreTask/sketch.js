//  Danny Ramirez
// 	2/25/20
//  This is a comment
//  The setup function function is called once when your program begins
var num = 100;
var ball = [];
var sizeW = 10;
var sizeH = 10;
var state = 0;
var button;
var sliderRed, sliderGreen, sliderBlue, sliderText;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(num);
  loadButton();
  sliderText = createP("Move the slider to change the color of the image. The first slider is red, the second is green, and the third is blue.");
  sliderText.position(width/2 + 200, height/2 - 100);
  sliderRed = createSlider(0, 255, 0);
  sliderRed.position(width/2 + 480, height/2 - 50);
  sliderGreen = createSlider(0, 255, 0);
  sliderGreen.position(width/2 + 480, height/2);
  sliderBlue = createSlider(0, 255, 0);
  sliderBlue.position(width/2 + 480, height/2 + 50);
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
    text("Click start to see the image.", 10, 20);
  pop();
  button.run();
}

function loadButton(){
  button = new Button(375, 675, 50, 50, "Start?", color(random(0, 255), random(0, 255), random(0, 255)));
}
