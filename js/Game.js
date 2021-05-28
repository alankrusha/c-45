class Game {
    constructor(){
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
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
  
      
    }
  
    play(){
      form.hide();

      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        var index = 0;
        for( var plr in allPlayers){
          index = index + 1;
          console.log("player" + player.index);
          if(plr === "player" + player.index){
            form.hideP2();
          }
          else if(plr === "player" + player.index){
            form.hideP1();
          }
        

          textSize(30);
          text(allPlayers.player1.name , 300, 120);
          textSize(30);
          text(allPlayers.player2.name , 900, 120);
          textSize(20);
          text("Score : " + allPlayers.player1. points, 300, 150);
          textSize(20);
          text("Score : " + allPlayers.player2. points, 900, 150);
          
          
          
        }
        point1();
      }     
      drawSprites();
    }
  
    end(){
      console.log("GAME ENDED");
    }

    
  }
  function point1(){
    if(Rcheck === true && Scheck1 === true){
        allPlayers.player1.points = allPlayers.player1.points + 1;
        player.update();
    }
    }

  