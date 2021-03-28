var background,backgound1;
var cat1,cat2,cat,cat4;
var mouse1,mouse2,mouse,mouse4;
var gameState = "play";
var canvas;


function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
   // tom3 = loadImage("cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
    background1= loadImage("images/garden.png");


}

function setup(){
    canvas =  createCanvas(windowWidth,windowHeight);
   
   // background = createSprite(1000,800)
    //background1.addImage(background);
    //create tom and jerry sprites here
    cat = createSprite(870,300,10,5);
    cat.scale = 0.08;
    //cat.addImage("sitting_cat",cat1);
    cat.addAnimation("moving_cat",cat1);
    //cat.addImage(cat4,"standing_cat");
    
    mouse = createSprite(100,300,10,5);
    mouse.scale = 0.06;
    mouse.addAnimation("standing_mouse",mouse1);
   // mouse.addAnimation(mouse2,"teasing_mouse");
    //mouse.addImage(mouse4,"caught_mouse");
}

function draw() {

    background(background1);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catchcat",cat4);
    cat.x = 300;
    cat.changeAnimation("catchcat");
    mouse.addAnimation("caughtmouse",mouse4);
    mouse.changeAnimation("caughtmouse");

}
    drawSprites();
}

function keyPressed(){
    if(keyDown("space")){
        gameState = "play";
    }
       // mouse.addImage(mouse1,"standing_mouse");
       // cat.addImage(cat1,"sitting_cat");}
    
        if(keyDown("left")){
            cat.addAnimation("moving_cat",cat2);
            cat.changeAnimation("moving_cat")
            mouse.addAnimation("teasing_mouse",mouse2);
            mouse.changeAnimation("teasing_mouse");
            cat.velocityX = -5;
            
        }
        
    
     
}

function collided(){

  //For moving and changing animation write code here
if(cat.x - mouse.x < cat.width/2 + mouse.width/2
&& mouse. x -cat.x < cat.width/2 + mouse.width/2
&& mouse.y - cat.y < cat.heigth/2 + mouse.heigth/2
&& cat.y - mouse.y < cat.heigth/2+ mouse.height/2);
cat.changeImage(cat4,"standing_cat");
mouse.changeImage(mouse4,"caught_mouse");
text("GAME OVER",200,300);
}
