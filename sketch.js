
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var box;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var box_options={
    restitution: 0.95,
    frictionAir:0.01
    
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  box=Bodies.rectangle(240,300,50,50,box_options);
  World.add(world,box);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 fill("orange")
  ellipse(ball.position.x,ball.position.y,20);
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
 
}

