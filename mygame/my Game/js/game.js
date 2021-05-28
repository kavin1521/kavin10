class Game {
    constructor(){
  
    }
  
    getState(){
      var gameRef  = database.ref('gameState');
      gameRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
           form = new Form()
           form.display();
      }
      road=createSprite(displayWidth/2,displayHeight);
      road.addImage("road",track1);
      road.velocityY=-6;

      rober=createSprite(100,200);
      rober.scale=1;
      rober.addAnimation("rober",rober1);

      cop=createSprite(400,200);
      cop.scale=1.5;
      cop.addAnimation("cop",cop1);

      players=[rober,cop];
    }

    play(){
       
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        console.log("play working");

        var index=0;
        var x = 200;
        var y ;   
      }

      for(var plr in allPlayers){
        index=index+1
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        players[index -1].x = x;
        players[index - 1].y = y;
      }

      if (index === player.index){
        stroke(10);
        fill("blue");
        ellipse(x,y,80,80);
        players[index - 1].shapeColor = "blue";
        camera.position.x = displayWidth/2;
        camera.position.y = players[index-1].y;
      }

      if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
        player.distance -= 10
        player.update();
    }
      if (keyIsDown(LEFT_ARROW) && player.index !== null) {
        player.distance += 10
        player.update();
    }

    if(road.y > 400 ){
      road.y = height/2;
    }

    if (frameCount % 200 == 0) {
      stone = createSprite(Math.round(random(100,1000),0,100,100));
      stone.addImage(stone4);
      stone.scale=1;
      stone.velocityY = 3;
      stone.lifetime = 200;
      stoneG.add(stone);
    }

    if (frameCount % 150 == 0) {
      stone1 = createSprite(Math.round(random(100,1000),0,100,100));
      stone1.addImage(stone5);
      stone1.scale=1;
      stone1.velocityY = 3;
      stone1.lifetime = 200;
      stone1G.add(stone1);
    }

    if (frameCount % 100 == 0) {
      stone2 = createSprite(Math.round(random(100,1000),0,100,100));
      stone2.addImage(stone6);
      stone2.scale=0.1;
      stone2.velocityY =3;
      stone2.lifetime = 200;
      stone2G.add(stone2);
    }

    if (frameCount % 290 == 0) {
      energy = createSprite(Math.round(random(100,1000),0,100,100));
      energy.addImage(energy3);
      energy.scale=1;
      energy.velocityY = 3;
      energy.lifetime = 200;
      energyG.add(energy);
    }

    if (frameCount % 320 == 0) {
      energy1 = createSprite(Math.round(random(100,1000),0,100,100));
      energy1.addImage(energy4);
      energy1.scale=1;
      energy1.velocityY = 3;
      energy1.lifetime = 200;
      energy1G.add(energy1);
    }

    if(player.distance > 5000){
      gameState = 2;
    }
      drawSprites();
    }
    end(){
      console.log("Game Ended");
    } 
}