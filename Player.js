class Player  {
    constructor(x, y){

      this.body = Bodies.rectangle(x, y, 10, 10);
      this.width = 10;
      this.height = 10;
      this.image = loadImage("images/player.png");
      World.add(world, this.body);
    }

playerLeft(){
  this.body.position.x = this.body.position.x+5; 
}



    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}