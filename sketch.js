
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("yellow");
  if(keyIsDown(DOWN_ARROW)){
  background("purple");
  }

  if(keyIsDown(UP_ARROW)){
  background("pink");
  }

  if(keyIsDown(RIGHT_ARROW)){
  background("blue");
  }

  if(keyIsDown(LEFT_ARROW)){
  background("green");
  }

}



  
