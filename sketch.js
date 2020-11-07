var background, backgroundImage;
var bow, bowImage;
var greenballoonImage;
var redballoonImage;
var blueballoonImage;
var pinkballoonImage;
var arrow, arrowImage;
var wall,blaster;
var sound,spikywall;

function preload() {
  backgroundImage = loadAnimation("background0.png");
  bowImage = loadImage("bow0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");
  blaster =  loadImage("blaster.jpg");
  sound = loadSound("GunShotSnglShotEx PE1097508.mp3")
  spikywall = loadImage("spiky wall.jpg");
}
function setup() {
  createCanvas(600, 600);
  background = createSprite(200, 50, 20, 20);
  background.addAnimation("ground", backgroundImage);
  background.scale = 3;
  wall = createSprite(1200, 200, 10, 700)
  wall.addAnimation("wall", spikywall);
  wall.scale= 5;
  bow = createSprite(400, 200, 50, 50);
  bow.addImage(bowImage);
  balloon_spawn();
  score = 0;  
}

function draw() {
  background.velocityX = -3

  
  bow.y = mouseY;
 if (balloon.isTouching(wall)) {
   balloon.addImage(blaster);
    sound.play(); 
    balloon.lifetime = 1;
    balloon_spawn();
  }



  if (background.x < 0) {
    background.x = background.width / 2;
  }
  if (keyDown("S")) {
    var temp_arrow = arrow_function();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
    if (balloon.isTouching(temp_arrow)) {
      score=score+1;
      sound.play();
      balloon.lifetime=1;
      balloon.addImage(blaster);
      balloon_spawn();
    }
  }

  drawSprites();
fill("grey");
textSize(30);
  text("Score: "+ score, 350,100);
if (score===10){
balloon.lifetime=0;
bow.lifetime=0;
  fill("yellow");
  textSize(150);
  bow.lifetime=1;
background.depth=background.depth+2;  
var cover = createSprite(500,90,1000,1100);
text("You win",20,250); 
}
 }

function arrow_function() {
  arrow = createSprite(bow.x - 50, 200, 20, 20);
  arrow.velocityX = -30;
  arrow.scale = 0.3;
  return arrow;
}

function balloon_spawn() {
  balloon = createSprite(20, random(10, 400), 10, 10);
  balloon.velocityX = 11;
  var balloonspawn = round(random(1, 4))

  switch (balloonspawn) {
   case 1:
      balloon.addImage(greenballoonImage);
      balloon.scale = 0.15; 
      break;
    case 2:
      balloon.addImage(redballoonImage);
      balloon.scale = 0.15; 
      break;
    case 3:
      balloon.addImage(blueballoonImage);
      balloon.scale = 0.15;
      break;
    case 4:
      balloon.addImage(pinkballoonImage);
      balloon.scale = 2;
  }
}