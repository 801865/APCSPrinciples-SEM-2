//Danny Ramirez
//10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var score = 0;
var gameState = 1;
var button;
var snakeWidth = 30;
var numCol = 0;
var numRow = 0;

function setup() {
  var cnv = createCanvas(900, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  numCol = width / snakeWidth;
  numRow = height / snakeWidth;
  fill(200, 30, 150);
  frameRate(6);
  loadSnake();
  loadFood();// loads the objects of the game(snake, food, button)
  loadButton();
}

//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }//checks which game screen the program should be run
}//end of draw

function startGame(){
  push();
    textAlign(CENTER);
    translate(450, 200);
    textSize(100);
    fill(random(255), random(255), random(255));
    text('Ssssnake!', 10, 20);
    textSize(30);
    translate(0, 100);
    fill(250, 250, 250);
    text('Instructions:', 10, 20);
    textSize(20);
    translate(0, 25);
    text('Use the arrow keys to contol the snake(green) in order to get an apple(red).', 10, 20);
    translate(0, 25);
    text("If you crash into the wall or the tail of the snake, it's game over!", 10, 20);
    //rules of game above
  pop();
  button.run();
}// start screen of game

function playGame(){
  push();
    translate(10, 20);
    textSize(25);
    fill(250, 250, 250);
    text('Score: ' + score, 10, 10);
  pop();
  snake.run();
  food.run();
}// play screen of game

function endGame(){
  push();
    textAlign(CENTER);
    translate(450, 200);
    textSize(100);
    fill(random(255), random(255), random(255));
    text('Game over!', 10, 20);
    translate(0, 200);
    text('Score: ' + score, 10, 20);
    textSize(40);
    translate(0, 100);
    fill(250, 250, 250);
    text("Press the reload button to try again.", 10, 20);
    //end game text above
    translate(0, 100);
    fill(250, 250, 250);
    if(score <= 4){
      text(score + " points? You can do better.", 10, 20);
    }else if(score >= 5 && score <= 10){
      text(score + " points? Nice.", 10, 20);
    }else if(score >= 11 && score <= 30){
      text(score + " points? Good job.", 10, 20);
    }else if(score >= 31 && score <= 50){
      text(score + " points? Great job!", 10, 20);
    }else if(score >= 51 && score <= 70){
      text(score + " points? Incredible!", 10, 20);
    }else if(score >= 71 && score <= 80){
      text(score + " points? Excelent!", 10, 20);
    }else if(score >= 81 && score <= 99){
      text(score + " points? You're a pro!", 10, 20);
    }else if(score >= 100){
      text(score + " points!!! You're the ol' mighty Snake God.", 10, 20);
    }//specail text based on how many points earned
    translate(0, 100);
    fill(250, 250, 250);
    if(score === 0){
      text("Can you do " + (score + 1) + "?", 10, 20);
    }else{
      text("Can you do " + (score*2) + "?", 10, 20);
    }//code of encouragement
  pop();
}// end screen for game

function loadSnake(){
  snake = new Snake(width/2, height/2, 30 , 30);
}//makes the snake

function loadFood(){
  var foodCol = numCol*ceil(random(0, numCol));
  var foodRow = numRow*ceil(random(0, numCol));
  food = new Food(foodCol, foodRow, 30, 30);
}//makes the food

function loadButton(){
  button = new Button(400, 600, 100, 50, 'Start Game?', color(random(255), random(255), random(255)));
}//makes a button

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-numCol, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(numCol, 0);
  }
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -numCol);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, numCol);
  }
}//movement for snake
