var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1 = createSprite(200,100,50,50);
  ball2 = createSprite(400,100,50,50);
  ball3 = createSprite(300,300,50,50);
  ball4 = createSprite(300,400,50,50);
  ball1.shapeColor = "purple";
  ball2.shapeColor = "blue";
  ball3.shapeColor = "green";
  ball4.shapeColor = "green";
  ball1.velocityX  = 3;
  ball2.velocityX   = -3;
  ball3.velocityY  = 3;
  ball4.velocityY  = -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, ball1)) {
    
    ball1.shapeColor = "red";
  }
  else {
    
    ball1.shapeColor = "purple";
  }
  if (isTouching(movingRect, ball2)) {
    
    ball2.shapeColor = "red";
  }
  else {
    
    ball2.shapeColor = "blue";
  }
  bounceOff(ball1,ball2);
  drawSprites();
}

