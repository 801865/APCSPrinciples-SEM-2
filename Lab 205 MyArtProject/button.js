//button.js
class Button{
  constructor(x, y, w, h, msg, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = clr;
    this.message = msg;
  }// elements of button

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    textSize(20);
    fill(255);
    text(this.message, this.x, this.y);
  }//end of render

  update(){
    if(mouseIsPressed && mouseX > this.x &&
      mouseX < (this.x + this.w) &&
      mouseY > this.y &&
      mouseY < (this.y + this.h)){
      background(b);
      if(this.message === 'Rainbow?'){
          r = random(0, 255);
          b = random(0, 255);
          g = random(0, 255);
          rainbow = true;
      }
      if(this.message = 'Rainbow?'){
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
      }
      background(b);
      mode = 1;
    }//changes the screen
  }//end of update
}//end of button class
