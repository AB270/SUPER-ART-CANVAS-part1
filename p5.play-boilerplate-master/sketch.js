

var pallet,border1,border2,border3,r1,r2,r3,r4,r5,r6,r7,r8,eraser;

function setup(){
    var canvas = createCanvas(1200,1000);
    
    pallet=createSprite(100,420,200,600);
    
    border1=createSprite(100,120,3000,1);
    border1.shapeColor="black";

    border2=createSprite(500,720,3000,1);
    border2.shapeColor="black";

    border3=createSprite(1200,420,1,600);
    border3.shapeColor="black";

    r1=createSprite(50,200,20,20);
    r1.shapeColor="red";

    r2=createSprite(150,200,20,20);
    r2.shapeColor="yellow";

    r3=createSprite(50,250,20,20);
    r3.shapeColor="lightgreen";

    r4=createSprite(150,250,20,20);
    r4.shapeColor="blue";

    r5=createSprite(50,300,20,20);
    r5.shapeColor="orange";

    r6=createSprite(150,300,20,20);
    r6.shapeColor="violet";

    r7=createSprite(50,350,20,20);
    r7.shapeColor="black";

    r8=createSprite(150,350,20,20);
    r8.shapeColor="brown";

    
    eraser=createSprite(100,400,100,20);
    eraser.shapeColor="white";
}

function draw() {
  //stroke(0);
  background(255);





drawSprites();
 

}

