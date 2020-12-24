const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var ground, snowman, snowball;
var backgroundIMG;


function preload(){
  backgroundIMG = loadImage("images/BackGround.jpg");
}


function setup() {  
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;
  
  player = new Player(100,20);
  
  ground = new Ground(400,400,1000,10);
  
  snowball = new Snowball(475,350);

  snowman = new Snowman(500,350,50,50);
  
  
  }

function draw() {
  background(backgroundIMG);
  Engine.update(engine);
  
  ground.display();

  player.display();

  snowman.display();
  snowball.display();
  drawSprites();
}

function keyPressed(){
  
  //Up
  if(keyCode === 32){
     player.y = player.y-5;
     snowman.x = snowman.x+15
    }
  //Down
  if (keyCode === DOWN_ARROW ) {
		console.log("Down Arrow Pressed");
    //player.y = player.y-15;
    player.playerLeft();
  }
    //Left
    if(keyCode === 37){
      player.y = player.x+5;
   }
    
   //Right
   if(keyCode === 39){
    player.y = player.x-5;
 }

}

