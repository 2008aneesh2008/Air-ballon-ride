var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;
function preload(){
   bg = loadImage("cityImage.png");
   balloonImage1 = loadAnimation("hotairballoon1.png");
   balloonImage2 = loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
   var ballonposition = database.ref("ballon/position")
    ballonposition.on("value",readPosition,showerror);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    writePosition(-10,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
      writePosition(+10,0)
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
      writePosition(0,-10)
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
      writePosition(0,10)
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(255, 0, 0);
  stroke("gold");
  textSize(25);
  text("**𝕌𝕤𝕖 𝕒𝕣𝕣𝕠𝕨 𝕜𝕖𝕪𝕤 𝕥𝕠 𝕞𝕠𝕧𝕖 ℍ𝕠𝕥 𝔸𝕚𝕣 𝔹𝕒𝕝𝕝𝕠𝕠𝕟!",40,40);
}

function readPosition(data){
 position = data.val()
balloon.x = position.x;
balloon.y = position.y;

}

function writePosition(x,y){
   database.ref("ballon/position").set({"x":position.x+x,"y":position.y+y,

   })
}
function showerror(){
    console.log("errorinDatabase")
}
