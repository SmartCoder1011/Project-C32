const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var bg = "sprites/bg.png"
var score = 0;

var world,engine;
function preload(){
  getTime();
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  platform = new ground(800,300,300,20);
  box1=new box(675,250,50,50);
  box2=new box(730,250,50,50);
  box3=new box(785,250,50,50);
  box4=new box(835,250,50,50);
  box5=new box(893,250,50,50);
  
  box7=new box(730,190,50,50);
  box8=new box(785,190,50,50);
  box9=new box(831,190,50,50);

  box10=new box(765,130,50,50);
  box11=new box(815,130,50,50);

  box12=new box(785,70,50,50);

  player = new circle(200,250)

  sling = new slingshot(player.body,{x:200,y:245});
  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  textSize(30);
  fill("white");
  text("Score: "+score,900,50);
Engine.update(engine);

platform.display();
box1.display();
box1.score();

box2.display();
box2.score();

box3.display();
box3.score();

box4.display();
box4.score();

box5.display();
box5.score();

box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();

sling.display();

player.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour > 20){
      bg="sprites/bg2.jpg";
  } else{
      bg="sprites/bg.png";
  }
  if(hour < 6){
      bg="sprites/bg.png";
  } else{
      bg="sprites/bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  //console.log(backgroundImg);

}