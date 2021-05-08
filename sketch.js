var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg,fairy;

var fairysound;





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyImg=loadImage("image/fairy.png,fairyimage1.png");

	fairysound=loadSound("sound/joymusic.mp3");
    

     
   
   



}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    
    fairysound.loop();

	
	//create fairy sprite and add animation for fairy

	fairy = createSprite(400,400)
	fairy.addAnimation("fairyflying",fairyimage2.png);
	fairy.scale = 0.5
   

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  console.log(star.y);

  //write code to stop star in the hand of fairy
	 


   if(fairy.isTouching(star) && star.collide(star)){

	fairy.collide(star)}



  drawSprites();
  
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
