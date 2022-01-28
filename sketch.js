var dodgeball, dodgeball2;
var dodgeballImg, dodgeball2Img;

function preload() {
  dodgeballImg = loadImage("images/dodgeball.png");
  dodgeball2Img = loadImage("images/dodgeball2.png");
}

function setup() {
  createCanvas(1000,500);


  dodgeball = createSprite(150,200);
  dodgeball.addImage(dodgeballImg);
  dodgeball.scale = 0.07;

  dodgeball2 = createSprite(800,200);
  dodgeball2.addImage (dodgeball2Img);
  dodgeball2.scale = 0.7;

}

function draw() {
  background("white");
 

  

  drawSprites()
}

// I am going to do a line down the middle, but I have forgoten how to make a line 