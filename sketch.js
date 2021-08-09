const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
  backgroundImg=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,20);
    platform = new Ground(150, 605, 300, 170);

    box1 = new Box(700,690,70,70);
    box2 = new Box(920,690,70,70);
    pig1 = new Pig(810, 650);
    log1 = new Log(810,590,300, PI/2);

    box3 = new Box(700,570,70,70);
    box4 = new Box(920,570,70,70);
    pig2 = new Pig(810, 570);
    log2 =  new Log(810,550,300, PI/2);

    box5 = new Box(810,500,70,70);
    log3 = new Log(760,450,150, PI/7);
    log4 = new Log(870,450,150, -PI/7);
    
    box6 = new Box(1200,690,70,70);
    box7 = new Box(1420,690,70,70);
    log5 = new Log(1315,590,300, PI/2);
    pig3 = new Pig(1320, 650);
    
    pig4 = new Pig(1320, 570);
    log6 = new Log(1290,550,150, PI/7);
    log7 = new Log(1390,550,150, -PI/7);

    bird = new Bird(220,323);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:330});
}

function draw(){
 
        background( backgroundImg);
    
    
    
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
   
    box6.display();
    box7.display();
    log5.display();
    pig3.display();

    
    log6.display();
    log7.display();
    pig4.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

