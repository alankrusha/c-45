var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var  Rhand, Phand, Shand; //hands
var  Rhand1, Phand1, Shand1; //hands1

var rock, paper, sci // buttons
var rock1, paper1, sci1; // buttons1

var rockImg, paperImg,sciImg // images
var rock1Img, paper1Img, sci1Img; // images1

var form, player, game;

var Rcheck = false;  //-
var Pcheck = false;  //- Check
var Scheck = false;  //-

var Rcheck1 = false;  //-
var Pcheck1 = false;  //- Check1
var Scheck1 = false;  //-
function preload(){
    rockImg = loadImage("images/rock1.png");      //-
    paperImg = loadImage("images/paper1.png");    //-  load Images
    sciImg = loadImage("images/sci1.png");        //-
    
    rock1Img = loadImage("images/rock2.png");     //-
    paper1Img = loadImage("images/paper2.png");   //-  load Images1
    sci1Img = loadImage("images/sci2.png");       //-

    backg = loadImage("images/bg.png");
}

function setup (){
   canvas = createCanvas(1200, 700);
   background("pink");
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    

    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
       clear();
       game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
    drawSprites();
}
//buttons functions
function rockFunction(){
    Rcheck = true;
    if(Pcheck === true || Scheck === true){
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }
        }
        Rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Rhand.addImage(rockImg);
        
    }
    
function paperFunction(){
    Pcheck =  true;
    if(Rcheck === true || Scheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }   
        }
        Phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Phand.addImage(paperImg);
    }
    
function sciFunction(){
    Scheck = true;
    if(Rcheck === true || Pcheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }   
        }
        Shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Shand.addImage(sciImg);
    } 

//buttons1 functions
function rock1Function(){
    Rcheck1 = true;
    if(Pcheck1 === true || Scheck1 === true){
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }
        }
        Rhand1 = createSprite(740, 540, 100, 100);
        Rhand1.addImage(rock1Img);
            
    }
        
function paper1Function(){
    Pcheck1 =  true;
    if(Rcheck1 === true || Scheck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }   
        }
        Phand1 = createSprite(740, 540, 100, 100);
        Phand1.addImage(paper1Img);
    }
        
function sci1Function(){ 
    Scheck1 = true;
    if(Rcheck1 === true || Pcheck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
    if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }   
        }
        Shand1 = createSprite(740, 540, 100, 100);
        Shand1.addImage(sci1Img);
    }

