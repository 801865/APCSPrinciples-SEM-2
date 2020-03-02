//button.js
class Button{
  constructor(x, y, w, h, msg, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.message = msg;
    this.color = clr;
  }

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    textSize(20);
    fill(255);
    text(this.message, this.x, this.y);
  }//end of render

  update(){
    if(mouseIsPressed && mouseX > this.x && mouseX < (this.x + this.w) &&
      mouseY > this.y && mouseY < (this.y + this.h)){
      if(this.message === 'Start?'){
        state = 1;
      }
    }//changes the game screen
  }//end of update
}//end of button class
