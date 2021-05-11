
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
function preload(){
  bg = loadImage("snow2.jpg" )
}

function setup() {

  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  snow1 = new Snow(200,50)
  snow2 = new Snow(750,50)
  snow3 = new Snow(1100,50)

}

function draw() {
  background(bg);  
  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();

  drawSprites();
}