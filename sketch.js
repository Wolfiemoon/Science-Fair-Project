var car
var wall
speed=0
weight=0
Vel=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  wall=createSprite(1500, 500, 60, height/2)
  invCol=createSprite(1560,500,120, height/2)
  invCol.shapeColor="red"
  invCol.visible=false
  car =createSprite(50, 500 ,50 ,50)
  car.shapeColor="blue"
  Input=new Input()
}

function draw() {
  background(0);  
  car.velocityX=speed - weight
  
   Input.display()

   car.collide(invCol)
   invCol.collide(car)
  
   //text(speed, 300,30)
   if(car.velocityX < 0){
   textAlign(CENTER)
   textSize(25)
   text("Car can't carry weight..", windowWidth/2, windowHeight/2)
   car.setVelocity(0,0)
   

   }

   if(car.velocityX ==180 && car.isTouching(wall) || car.velocityX < 180 && car.isTouching(wall)){
   car.shapeColor="green"
   car.setVelocity(0,0)
   }
   if(car.velocityX > 280 && car.isTouching(wall) && car.velocityX < 380){
    car.shapeColor="yellow"
    car.setVelocity(0,0)
    }
   
    if(car.velocityX > 380 && car.isTouching(wall)){
      car.shapeColor="red"
      car.setVelocity(0,0)
      }
     
    //text(car.velocityX,50,300)
    console.log(car.velocityX)
  
  drawSprites();
}

