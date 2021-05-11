class Snow {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,100,options);
      this.r = 100;
      this.image = loadImage("snow4.webp")
      World.add(world, this.body);
    }
   
 
  display() {

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("white");

   image(this.image,0,0,this.r,this.r)
    pop();
}
};
