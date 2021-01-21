var canvas;
var block1,block2,block3,block4;
var ball; 
var edges;
var bounce;

function preload(){
    bounce = loadSound("bounce.wav");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = ("red");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = ("yellow");

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = ("blue");

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = ("green");

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = ("white");
    ball.velocityX = 9;
    ball.velocityY = 9;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = ("red"); 
        bounce.play();     
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = ("yellow");
        ball.velocityX = 0;
        ball.velocityY = 0; 
        textSize(50);
        text("GAME-OVER",250,300);
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = ("blue");
        bounce.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = ("green");
        bounce.play();
    }

    drawSprites();
}