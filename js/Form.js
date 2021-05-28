class Form{
    constructor(){

        
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        //buttons

        this.rock = createButton("ROCK");
        this.paper = createButton("PAPER");
        this.sci = createButton("SCISSORS");

        this.rock1 = createButton("ROCK");
        this.paper1 = createButton("PAPER");
        this.sci1= createButton("SCISSORS");
        this.rock.position(50, 500);
        this.rock.mousePressed(rockFunction);

        
        this.paper.position(50, 550);
        this.paper.mousePressed(paperFunction);

        
        this.sci.position(50, 600);
        this.sci.mousePressed(sciFunction);

        //buttons1
        
        this.rock1.position(1150, 500);
        this.rock1.mousePressed(rock1Function);

        
        this.paper1.position(1150, 550);
        this.paper1.mousePressed(paper1Function);

        
        this.sci1.position(1150, 600);
        this.sci1.mousePressed(sci1Function);

        
        for(var i = 0 ; i < 900; i = i+ 20){
            line(600, i, 600, i+10);
        }
    }

    hideP1(){
        console.log("hidep1");
        this.rock.hide();
        this.paper.hide();
        this.sci.hide();
    }
    
    hideP2(){
        console.log("hidep2");
        this.rock1.hide();
        this.paper1.hide();
        this.sci1.hide();
    }
    display(){
       this.title = createElement('h1');
       this.title.html("ROCK PAPER SCISSORS");
       this.title.position(400, 30);

       this.input = createInput("NAME");
       this.input.position(450, 200);

       this.button = createButton('START');
       this.button.position(500, 300);

       this.reset = createButton('reset');
       this.reset.position(500, 650);
       

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        })




    }
}



