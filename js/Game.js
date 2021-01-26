class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,420);
    player1.addImage("player1",player_img);
    player1.scale = 0.25;

    player2 = createSprite(200,420);
    player2.addImage("player2", player_img);
    player2.scale = 0.25;

    players=[player1,player2];


        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 900, 480);
                 var x =100;
                 var y=200;
                
                 drawSprites();
                 for(var plr in allPlayers){
                    var index =0;
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=420;

                    
                     
                     players[index -1].x =mouseX;
                     players[index - 1].y = y;
                       players[index].visible=false;
  
                    
                         textSize(25);
                         fill("white");
                         text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
                        text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                 
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 780), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                        
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                      for(var i = 0; i< fruitGroup.length;i++){
                          if(fruitGroup.get(i).isTouching(players)){
                            fruitGroup.get(i).destroy();
                            player.score =player.score+1;
                            player.update();
                          }
                       
                      }
                            
                        
                  }
               
    }

    end(){
       console.log("Game Ended");
    }
}