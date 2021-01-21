const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var stone;


function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
	stone=new Stone(235,420,30); 

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new Slingshot(stone.body,{x:235,y:420})
	
	Engine.run(engine);
}

function draw() {
    

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  launcherObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  groundObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango11);
  detectollision(stone,mango12);

	fill("red")
	textSize(30)
	text("PRESS 'SPACE' TO PLAY AGAIN",100,200)

	fill("blue")
	textSize(40)
	text("PLUCKING MANGOES",500,70)

}

function detectollision(lstone,lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}

function keyPressed() {
	if (keyCode===32)
		Matter.Body.setPosition(stone.body,{x: 230, y: 420})
		launcherObject.attach (stone.body);
		}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

