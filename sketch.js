var database;
var drawing = [];
var currentPath = [];

function setup() {
  canvas = createCanvas(800,700);
  canvas.mousePressed(startPath);
  //canvas.mouseReleased(endPath);
  
  database = firebase.database();

 
}

function startPath(){

  currentPath = [];

  drawing.push(currentPath);

}



//function endPath(){

//}

function draw() {
background(255,165,0); 


//User.getUserInfo();

if(mouseIsPressed){

  var point = {

    x:mouseX,
    y:mouseY

  }

  currentPath.push(point);

}


stroke(255);
strokeWeight(5);
noFill();

for(var i = 0 ; i < drawing.length ; i++){
  var path = drawing[i];
  beginShape();
  for(var j = 0 ; j < path.length ; j++){
vertex(path[j].x , path[j].y)

}

endShape();

}




}

