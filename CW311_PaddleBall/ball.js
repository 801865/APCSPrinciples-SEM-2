//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.clr = color(random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 run(){
   this.checkEdges();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0 && this.id%2 === 2){//  if not mainBall
      for(var i = 0; i < balls.length; i++){
        if(balls[i].loc.x > paddle.loc.x && balls[i].loc.x < (paddle.loc.x + paddle.w) && balls[i].loc.y > paddle.loc.y && balls[i].loc.y < (paddle.loc.y + paddle.h));
        balls.splice(i, 1);
      }
    }else if(this.id === -1){
      if(mainBall.loc.x > paddle.loc.x && mainBall.loc.x < (paddle.loc.x + paddle.w) && mainBall.loc.y > paddle.loc.y && mainBall.loc.y < (paddle.loc.y + paddle.h)){
          cfhgvjjhjhgjvg
      }
    }else if(this.id >= 0 && this.id%2 === '1'){//  if not mainBall
      for(var i = 0; i < balls.length; i++){
        if(balls[i].loc.x > paddle.loc.x && balls[i].loc.x < (paddle.loc.x + paddle.w) && balls[i].loc.y > paddle.loc.y && balls[i].loc.y < (paddle.loc.y + paddle.h));
        balls.splice(i, 1);
      }
    }
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
  if(this.id < 0){
    this.clr = color(0, 0, 255);
  }else if(this.id%2 === 0) {
    this.clr = color(0, 255, 0);
  }else{
    this.clr = color(255, 0, 0);
  }
   fill(this.clr);
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
