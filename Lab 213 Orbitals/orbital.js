//orbital.js
class Orbital{
  constructor(x, y){
    this.loc = createVector(0, 0);
    this.lifeSpan = random(1000);
    var r = random(255);
    var g = this.lifeSpan%250;
    var b = random(255);
    this.clr = color(r, b, g);
    this.angle = random(TWO_PI)
  }
}
