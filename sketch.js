var wall,car,weight,speed;
function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 200, 20, 400);
  speed = random(50,90);
  weight = random(400,1500);
  deformation = (0.5*speed*speed*weight)/22500;
  car = createSprite (50,200,50,50);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (wall.width+car.width)/2){
  car.velocityX = 0;
  if (deformation > 180){
    car.shapeColor = "red"
  }
  if (deformation < 80){
    car.shapeColor = "green"
  }
  if (deformation < 180 && deformation >= 80){
    car.shapeColor = "yellow"
  }
  }
  drawSprites();
}