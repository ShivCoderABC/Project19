var bananaImage,obstacleImage,obstacleGroup, background1,background1Image,score,player_running,player1,ground,foodGroup, obstacleGroup

function preload(){
  background1Image=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.jpg","Monkey_02.jpg","Monkey_03.jpg","Monkey_04.jpg","Monkey_05.jpg","Monkey_06.jpg","Monkey_07.jpg","Monkey_08.jpg","Monkey_09.jpg","Monkey_10.jpg")
  
  bananaImage=loadImage("banana.jpg")
  obstacleImage=loadImage("stone.jpg")
}

function setup() {
  createCanvas(800,400);
  background1=createSprite(0,0,800,400)
  background1.addImage(background1Image)
  background1.scale = 1.7
  background1.x = background1.width/2
  background1.velocityX = -3
  player1=createSprite(100,340,20,50)
  player1.addAnimation("running",player_running)
  player1.scale = 0.07
  ground=createSprite(400,350,800,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  ground.visible = false
  foodGroup = new Group()
  obstacleGroup = new Group()
  score = 0
}
function draw() {
  background(220);
  if(ground.x<0){
ground.x = ground.width/2
  }
  if(background1.x<100){
 background1.x = background1.width/2
  }
  if(foodGroup.isTouching(player1)){
    foodGroup.destroyEach();
    score = score + 1
    
  }
  switch(score){
      case 10: player1.scale = 0.12
      break;
      case 20: player1.scale = 0.14
      break;
      case 30: player1.scale = 0.16
      break;
      case 40: player1.scale = 0.18
    default:break;
  }
  if(keyDown(UP_ARROW)){
    player1.velocityY= -3
  }
  player1.velocityY = player1.velocityY + 0.3
  player1.collide(ground)
  if(obstacleGroup.isTouching(player1)){
    obstacleGroup.destroyEach();
    player1.scale = 0.07
  }
  drawSprites();
  spawnFood();
  spawnObstacles();
  textSize(25)
  fill("cyan")
  text("Score:"+ score, 500, 50)
}
function spawnFood(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    //assign lifetime to the variable
    banana.lifetime = 300; 
    player1.depth = banana.depth + 1;
    //add each banana to the group
    foodGroup.add(banana); }


}
function spawnObstacles(){
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,250,40,10);
    obstacle.y = random(120,200);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.05;
    obstacle.velocityX = -8;
    //assign lifetime to the variable
   obstacle.lifetime = 300; 
    player1.depth = obstacle.depth + 1;
    //add each banana to the group
    obstacleGroup.add(obstacle); }

}