//Danny Ramirez
//3/25/20
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var obstacle = [];
var num = 1;
var check = 10;
var score = 0;
var gameState = 1;
var button;
var snakeWidth = 30;
var numCol = 0;
var numRow = 0;
var easy, medium, hard;
var state = 0;
function setup() {
  var cnv = createCanvas(900, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  numCol = width / snakeWidth;
  numRow = height / snakeWidth;
  fill(200, 30, 150);
  frameRate(6);
  loadSnake();
  loadFood();// loads the objects of the game(snake, food, button, obstacle)
  loadButton();
  loadObstacle(num);
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
  }else if(gameState === 0){
    Settings();
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
    text("If you crash into the wall or the tail of the snake (or if you hit an obstacle", 10, 20);
    translate(0, 25);
    text("(blue) when you choose easy, medium, or hard), it's game over!", 10, 20);
    translate(0, 25);
    text("Press easy for 1 obstacle every 10 points, medium for 4 obstacles every 10 points, and hard", 10, 20);
    translate(0 , 25);
    text("which means 8 obstacles for every 10 points gotten. Or, choose start game for no obstacles", 10, 20);
    //rules of game above
  pop();
  button.run();
  easy.run();
  medium.run();
  hard.run();
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
  runObstacle();
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

function loadObstacle(n){
  for(var i = 0; i < n; i++){
    var obCol = numCol*ceil(random(0, numCol));
    var obRow = numRow*ceil(random(0, numCol));
    obstacle[i] = new Obstacle(obCol, obRow, 30, 30);
  }
}//loads obstacles

function loadButton(){
  button = new Button(400, 800, 100, 50, 'Start Game?', color(random(255), random(255), random(255)));
  easy = new Button(200, 550, 100, 50, 'Easy', color(random(255), random(255), random(255)));
  medium = new Button(400, 550, 100, 50, 'Medium', color(random(255), random(255), random(255)));
  hard = new Button(600, 550, 100, 50, 'Hard', color(random(255), random(255), random(255)));
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

function runObstacle(){
  if(state === 1){
    if(score > 10){
      for(var i = 0; i < num -1; i++){
        obstacle[i].run();
      }
    }
    if(score%10 === 0 && check === score){
      num = num + 1;
      loadObstacle(num);
      check = check + 10;
    }
  }// easy mode
  if(state === 2){
    if(score > 10){
      for(var i = 0; i < num; i++){
        obstacle[i].run();
      }
    }
    if(score%10 === 0 && check === score){
      num = num + 3;
      loadObstacle(num);
      check = check + 10;
    }
  }// medium mode
  if(state === 3){
    if(score > 10){
      for(var i = 0; i < num; i++){
        obstacle[i].run();
      }
    }
    if(score%10 === 0 && check === score){
      num = num + 7;
      loadObstacle(num);
      check = check + 10;
    }
  }// hard mode
}// end of run obstacle
