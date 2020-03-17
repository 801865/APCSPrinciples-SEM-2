//obstacle.js
class Obstacle{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }// elements of obstacle

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(0, 0, 255);
    if(this.x >= 900 || this.y >= 900){
      this.x = numCol*ceil(random(0, numCol));
      this.y = numRow*ceil(random(0, numRow));
    }//checks if obstacle is out of canvas
    if(snake.segments.length > 0){
     for(a = snake.segments.length - 1; a >= 0; a--){
        if(snake.segments[a].x === this.x && snake.segments[a].y === this.y){
          this.x = numCol*ceil(random(0, numCol));
          this.y = numRow*ceil(random(0, numRow));
       }//checks if snake body is touching obstacle
     }//checks for each segment
   }//starts checking after one segment is added
    rect(this.x, this.y, this.w, this.h);
  }

  update(){
    if(this.x === snake.head.x && this.y === snake.head.y){
        gameState = 3;
    }// game ends when snake touches obstacle
  }

}//end of obstacle class
