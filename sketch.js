const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var top, left, right, bottom

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  top = new Rectangles(200, 0, 400, 20)
  bottom = new Rectangles(200, 390, 400, 20)
  left = new Rectangles(390, 200, 20, 400)
  right = new Rectangles(0, 200, 20, 400)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  console.log(top)
  console.log(bottom)
  console.log(left)
  console.log(right)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  //top.Visible()
  //bottom.Visible()
  //left.Visible()
  //right.Visible()
  fill ("green")
  console.log(top.body.position.x)
  rect(top.body.position.x, top.body.position.y, top.width, top.height)

}

