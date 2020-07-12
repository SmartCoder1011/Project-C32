class circle {
    constructor(x, y) {
      var options={
        isStatic:false,
        density:0.8,
        restitution:1,
        friction:0
      }
      this.body=Bodies.circle(x,y,25,options);
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("limeGreen");
      
      ellipse(pos.x,pos.y,25,25)
    }
  };
 