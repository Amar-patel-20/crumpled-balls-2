
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3,ground,ball;
var dustbinIMG

function preload(){
  dustbinIMG = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground = new block(600,380,1200,20)
   block1 = new block(900,320,20,100)
   block2 = new block(1100,320,20,100)
   block3 = new block(1000,365,180,20)
   ball = new paper(100,360,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  fill("cyan")
  block1.display()
  block2.display()
  block3.display()
  ball.display()
  fill("brown")
  ground.display()
  imageMode(CENTER)
  image(dustbinIMG,1000,270,270,200)
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:87,y:-55})
	}
}





