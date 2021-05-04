var canvas;
var block1,block2,block3,block4;
var ball, edges;
var sound;

function preload(){
    sound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "yellow";
    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    sound.play();
    

    
    
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
        
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.setVelocity(0,0);
        

        //write code to stop music
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(block3);
        
    }


    if(block4.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.bounceOff(block4);
        
    }

    drawSprites();
}
