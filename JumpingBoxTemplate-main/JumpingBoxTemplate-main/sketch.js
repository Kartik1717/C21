var canvas;
var music;
var red,pink,blue,purple,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 red=createSprite(90,590,180,20) 
 pink=createSprite(290,590,180,20);
 purple=createSprite(490,590,180,20);
 blue=createSprite(690,590,180,20);
 red.shapeColor='red'
 pink.shapeColor='pink'
 purple.shapeColor='purple'
 blue.shapeColor='blue'
    //create box sprite and give velocity
    
   box=createSprite(200,200,50,50)
   box.shapeColor='yellow'
   box.velocityX=10,box.velocityY=2;
 
 
  



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges=createEdgeSprites()
  
    if(red.isTouching(box)){
          
     box.shapeColor='red'
     box.velocityX=0,Box.velocityY=0;
    }
    if(purple.isTouching(box)){
          
        box.shapeColor='purple'
        box.velocityX=0,box.velocityY=0;
       }
       if(pink.isTouching(box)){
          
        box.shapeColor='pink'
        box.velocityX=0,Box.velocityY=0;
       }
       if(blue.isTouching(box)){
          
        box.shapeColor='blue'
        box.velocityX=0,Box.velocityY=0;
       }

    
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    drawSprites()
}
