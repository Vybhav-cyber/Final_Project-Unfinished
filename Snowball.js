class Snowball {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,40,40, options);
      this.image = loadImage("images/snowball.png");
      World.add(world, this.body);
    }


    display(){
      var pos =this.body.position;
      fill("brown");
      image(this.image, this.body.position.x, this.body.position.y, 40,40);
      
    }
  };
