var fixedRect,movingRect;
 function setup() 
 { createCanvas(800,400);
   fixedRect = createSprite(400, 100, 50, 50); 
   fixedRect.shapeColor = "green"; 
   fixedRect.velocityY = 3;
   movingRect = createSprite(400,300,80,50);
    movingRect.shapeColor = "green"; 
    movingRect.velocityY = -3;
  } function draw()
   { background("yellow");
    //movingRect.x = mouseX;
    // movingRect.y = mouseY;
      if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
         fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
         {
            fixedRect.velocityX = fixedRect.velocityX * (-1);
            movingRect.velocityX = movingRect.velocityX * (-1);
         }

       if( movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 )
      { 
            fixedRect.velocityY = fixedRect.velocityY * (-1);
            movingRect.velocityY = movingRect.velocityY * (-1);
       } 
       drawSprites(); }