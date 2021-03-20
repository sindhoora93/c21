var fixedRect, movingRect;

var ob1, ob2, ob3, ob4;

function setup(){
  createCanvas(1200,800);

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,40);
  movingRect.shapeColor = "green";
  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = "green";
  ob2 = createSprite(200,100,50,50);
  ob2.shapeColor = "green";
  ob3 = createSprite(300,100,50,50);
  ob3.shapeColor = "green";
  ob4 = createSprite(400,100,50,50);
  ob4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,ob2)){
  movingRect.shapeColor = "blue";
  ob2.shapeColor = "blue";
 } 

 else{
  movingRect.shapeColor = "green";
  ob2.shapeColor = "green";
 }
  
  drawSprites();
}

function isTouching(R1,R2){
  if (R1.x - R2.x < R2.width/2 + R1.width/2
    && R2.x - R1.x < R2.width/2 + R1.width/2
    && R1.y - R2.y < R2.height/2 + R1.height/2
    && R2.y - R1.y < R2.height/2 + R1.height/2) {
  
      return true;
}
else {
   return false;
}

}