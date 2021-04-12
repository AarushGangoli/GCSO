



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,30,height/2)
  wall=color(80,80,80)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  


  if(wall.x-car.x <(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5*width*speed*speed/22509;
    if(car.deformation>180){
      car.shapeColor="blue"

    }
    if(deformation<180 && deformation>100){
      car.shapeColor="green"

    }
    if(deformation<100){
car.shapeColor="red"
    }

  }
  drawSprites();
}