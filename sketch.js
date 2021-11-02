let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

var meteors = [];



function preload()
{
  lander_img = loadImage("assets/astronaught.png");
  bg_img = loadImage("assets/spacetheme.gif");
}

function setup() {
  createCanvas(1000,500);
  frameRate(80);


  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.25;

  

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;




  drawSprites();
}

function showMeteors(){
  if (meteors.length > 0){
    if(
      meteors[meteors.length-1]=== undefined || 
      meteors[meteors.length-1].body.position.y < 500
    ){
      var positions = [-40,-60,-70,-20];
      var position = random(positions);
      var met = new Meteor(width,height-100,170,170,position);
      meteors.push(meteor);

    }

    for(var i = 0; i < meteors.length; i++){
      if(meteors[i]){
        Matter.Body.setVelocity(meteors[i].body,{
          x: 0,
          y: 0.8
        })
        meteors[i].display();
      }/*else {
        var meteor = new Meteor(500,250,130,100,angle);
        meteors.push(meteor);
        angleMode(DEGREES)
        angle = -60;
      }*/
    }
  }
}



