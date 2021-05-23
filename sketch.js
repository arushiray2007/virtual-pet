//Create variables here
var dog, happyDog,database,foodS,foodStock,img,img1;
function preload()
{
	//load images here
  img=loadImage("images/dogImg.png");
  img1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(img);
  dog.scale=0.2;
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img1);
  }
  drawSprites();
  //add styles here
  fill(255);
  stroke("black");
  text("Food Remaining : "+foodS,170,100);
  textSize(13);
  text("Note: Press up arrow key to feed milk",130,10,300,20);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

