const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground, launcher;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
  
  mango1=new mango(1100,100,30);
  mango2=new mango(1200,200,30);
  mango3=new mango(900,190,30);
  mango4=new mango(1000,170,30);
  mango5=new mango(1100,190,30);

	tree=new Tree(1050,580);
  ground=new Ground(width/2,600,width,20);
  stone=new Stone(300,340,40);
	launcher=new Launcher(stone.body,{x:340, y:430});

	Engine.run(engine);

}

function draw() {
  background(230);

  Engine.update(engine);

  image(boy,300,360,200,300);

  // detectCollision(stone,mango1);
  // detectCollision(stone,mango2);
  // detectCollision(stone,mango3);
  // detectCollision(stone,mango4);
  // detectCollision(stone,mango5);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  stone.display();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmando.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
 }
}

function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   //}
}

function mouseReleased(){
   launcher.fly();
}

function keyPressed(){
  if(keyCode === 32 && stone.body.speed<1){
      Matter.Body.setPosition(bird.body,{x:340,y:430});
      launcher.attach(stone.body);
  }
}