class  Block extends BaseClass {
    constructor(x, y){
      super(x,y,30,50);
    }
    display(){
      if(this.body.speed < 9){
        super.display();
      }
      else{
        push();
        World.remove(world,this.body);
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        rect(this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    } 
  }