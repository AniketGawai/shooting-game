var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2



  bullet = createSprite(10,height/2,05,05);
  bullet.addImage(bulletImg)
  bullet.scale = 0.2;
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
 
  
}

function draw() {
  background("#BDA297");

  if(keyDown("SPACE")){
    shoot()
  }

  var rand = Math.round(random(0,3));
  // console.log(rand);
   if(frameCount%60 === 0){
   switch(rand){
     case 0: spawnredBubbleGroup();
             break;
    
   }
   
   }
   var rand = Math.round(random(0,3));
   // console.log(rand);
    if(frameCount%100=== 0){
    switch(rand){
   case 1: spawnblueBubbleGroup();
   break
    }
  }
  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  

  drawSprites();
  }
    


}

function drawRedBubbles(){
  var rand = random(10,230);
   var  drawRedBubbles = createSprite(rand,450,40,10);
   drawRedBubbles.addImage("redbubble.png",redBubbleImg )
   drawRedBubbles.velocityX = -5;
   drawRedBubbles.lifetime = 90;
   redBubbleGroup.add(redBubbleImg);
     
}

function drawBlueBubbles(){
  var rand = random(10,230);
   var  drawBlueBubbles = createSprite(rand,450,40,10);
   drawBlueBubbles.addImage("waterbubble.png",blueBubbleImg )
   drawBlueBubbles.velocityX = -5;
   drawBlueBubbles.lifetime = 90;
  blueBubbleGroup.add(blueBubbleImg);
}


function shoot(){
  bullet.y = gun.y
  createSprite()
  bullet.addImage("bullet1.png",bulletImg )
  bullet.velocityX = + 5
}
  