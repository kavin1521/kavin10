var database;
var distance;
var game,form;
var gameState=0;
var playerCount;
var bg1img,track1;
var player,players;
var allPlayers;
var canvas;
var rober1,cop1,rober,cop,cr;
var stone,stone1,stone2,stone4,stone5,stone6;
var energy,energy1,energy3,energy4;
var road;

function preload(){
bg1img=loadImage("bg/bg1.jpg");
track1=loadImage("bg/track.png");
rober1=loadAnimation("rob/r1.png","rob/r2.png","rob/r3.png","rob/r4.png","rob/r5.png","rob/r6.png","rob/r7.png","rob/r8.png","rob/r9.png")
cop1=loadAnimation("cop/c1.png","cop/c2.png","cop/c3.png","cop/c4.png","cop/c5.png","cop/c6.png","cop/c7.png","cop/c8.png")
stone4=loadImage("obstacle/stone1.png");
stone5=loadImage("obstacle/stone2.png");
stone6=loadImage("obstacle/stone3.png");
energy3=loadImage("obstacle/energy1.png");
energy4=loadImage("obstacle/energy2.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();

    stoneG = new Group();
    stone1G = new Group();
    stone2G = new Group();
    energyG = new Group();
    energy1G = new Group();
    
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(bg1img,displayWidth/2,displayHeight/2,displayWidth-20,displayHeight-30)
   
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
    }