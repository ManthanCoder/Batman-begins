const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var raindrops = []; 




function setup(){
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
    engine = Engine.create();
    world = engine.world;  
}

function draw(){

    background("black");
 
    Engine.update(engine);
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

    

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

    drawSprites();
}   

