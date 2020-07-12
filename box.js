class box extends BaseClass{
    constructor(x, y) {
        super(x,y,50,50);
        this.image = loadImage("sprites/box2.png")
        this.visiblity=255;
      }
      display(){
        if(this.body.speed < 5){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image,this.body.position.x, this.body.position.y,50,50);
           pop();
         }
        // console.log(this.body);
      }


      score(){
        if(this.visiblity<0 && this.visiblity>-100){
          score++;
        }
      }
}