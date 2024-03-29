const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;
var ball2;
var ball3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1
    }

    var ball1_options ={
        restitution: 0.8
    }

    var ball2_options ={
        restitution: 0.5
    }

    var ball3_options ={
        restitution: 2
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
     ball= Bodies.circle(200,200,20,ball_options)
    console.log(ground);
    World.add(world,ball);
    ball1= Bodies.circle(180,180,20,ball1_options)
    World.add(world,ball1);
    ball2= Bodies.circle(180,150,20,ball2_options)
    World.add(world,ball2);
    ball3= Bodies.circle(180,120,20,ball3_options)
    World.add(world,ball3);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,20,20);
}