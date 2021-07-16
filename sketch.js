const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;


var bg
var snows=[]
function preload(){
bg=loadImage("snow3.jpg");
}


function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;
  

}

function draw() {
  background(bg); 

 Engine.update(engine);

 if(frameCount % 10 ===0){
   snows.push(new Snow(random(0,1000),0,10));
 }
 if(frameCount % 20 ===0){
   snows.push(new Snow(random(0,1000),0,10));
 }

 for(var i=0;i<snows.length;i++){
   snows[i].display();
 }
}