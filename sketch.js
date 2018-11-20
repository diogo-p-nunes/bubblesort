var width;
var height;

var arr = [];
var arrSize;
var zoom = 10;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  background(50);

  initArray();
}

function initArray() {
  arrSize = floor(width/zoom);
  for(var i=0; i < arrSize; i++) {
    arr.push(floor(random(height)));
  }
}


function draw() {
  scale(10, 1);
  background(50);
  stroke(255, 255, 255);
  for(var i=0; i < arrSize; i++) {
    line(i, 0, i, arr[i]);
  }
}
