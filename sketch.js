var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700,200,60,height/2);    
  
  
}

function draw() {
  background("black");
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  deformation = 0.5*weight*speed*speed/22500
  if(deformation>180)
  {
  car.shapeColor = color(250,0,0);
  }
  if(deformation < 180 && deformation > 100)
  {
  car.shapeColor = color(230,230,0);
  }
  if(deformation < 100)
  {
  car.shapeColor = color(0,250,0);
  }
  }
  drawSprites();
}