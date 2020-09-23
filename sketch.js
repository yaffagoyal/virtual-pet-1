//Create variables here
var dog;
var standingDog;
var database;
var foodS;
var foodStock;
var standingDogImage;
var dogImage;

function preload()
{
  //load images here
  standingDogImage= loadImage("dogImg.png");
  dogImage= loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,400);
  dog.addImage(dogImage)

  foodStock= database.ref('Food');
  foodStock.on("value",readStock);

  database = firebase.database()
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(standingDogImage);
}
 drawSprites();
  //add styles here
  textSize(24)
  textFont("Avenir")
  stroke(4)
  text(" Note: Press UP_ARROW key To Feed the Dog Milk",100,200)
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
}else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})
}



