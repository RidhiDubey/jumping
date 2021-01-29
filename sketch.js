var canvas;
var music;
var surf1;
var surf2;
var surf3;
var surf4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
surf1=createSprite(50,350,100,50);
surf1.shapeColor="blue";

surf2=createSprite(150,350,100,50);
surf2.shapeColor="pink";

surf3=createSprite(250,350,100,50);
surf3.shapeColor="green";

surf4=createSprite(350,350,100,50);
surf4.shapeColor="yellow";


    //create box sprite and give velocity
    box=createSprite(random(20,350),100,20,20);
    box.shapeColor="white";
    box.velocityX=8;
    box.velocityY=4;
    
}
function draw() {
    background("orange");
    //create edgeSprite
    edges=createEdgeSprites();
    
 //add condition to check if box touching surface and make it box
    if(isTouching(box,surf1) && box.bounceOff(surf1)){
        box.shapeColor="blue";
        music.play();
    }
    if(isTouching(box,surf2) && box.bounceOff(surf2)){
        box.shapeColor="pink";
        music.play();
        
    }
    if(isTouching(box,surf3) && box.bounceOff(surf3)){
        box.shapeColor="green";
        music.play();
        
    }
    if(isTouching(box,surf4) && box.bounceOff(surf4)){
        box.shapeColor="yellow";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }
    if(box.isTouching(edges)){
        box.bounceOff(edges);
    }
    
    
    drawSprites();
}
