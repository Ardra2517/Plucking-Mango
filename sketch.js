const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeImage;
var stone,ground,launcher;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  treeImage=loadImage("tree.png");
  }

function setup() {
	createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
  
  mango1=new mango(800,300,30);
  mango2=new mango(600,400,30);
  mango3=new mango(900,400,30);
  mango4=new mango(700,300,30);
  mango5=new mango(750,400,30);

	// tree=new Tree(1050,580);
  ground=new Ground(width/2,600,width,20);
  stone=new Stone(300,340,40);
	launcher=new Launcher(stone.body,{x:340, y:430});

	Engine.run(engine);

}

function draw() {
  background(230);

  Engine.update(engine);

  image(boy,300,360,200,300);
  image(treeImage,500,200,500,500);


  // tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  stone.display();
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