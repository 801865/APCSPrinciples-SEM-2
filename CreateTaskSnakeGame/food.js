//food.js
var a = 0;
class Food{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }// elements of food

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(255, 0, 0);
    if(this.x >= 900 || this.y >= 900){
      this.x = numCol*ceil(random(0, numCol));
      this.y = numRow*ceil(random(0, numRow));
    }//checks if food is out of canvas
    if(snake.segments.length > 0){
     for(a = snake.segments.length - 1; a >= 0; a--){
        if(snake.segments[a].x === this.x && snake.segments[a].y === this.y){
          this.x = numCol*ceil(random(0, numCol));
          this.y = numRow*ceil(random(0, numRow));
       }//checks if snake body is touching food
     }//checks for each segment
   }//starts checking after one segment is added
    rect(this.x, this.y, this.w, this.h);
  }
  update(){
    if(this.x === snake.head.x && this.y === snake.head.y){
      score = score + 1;
      snake.segments.push(createVector(0 , 0));
      this.x = numCol*ceil(random(0, numCol));
      this.y = numRow*ceil(random(0, numRow));
    }//checks if snake is equal to food and, if true, moves to a different area
  }//end of update
}//end of food class
