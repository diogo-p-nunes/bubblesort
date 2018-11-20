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
  
  //sort(arr);

  bubblesort(arr);
  console.log(arr);
}

function initArray() {
  arrSize = floor(width/zoom);
  for(var i=0; i < arrSize; i++) {
    arr.push(floor(random(height)));
  }
}

function bubblesort(someArray) {
  swapped = true;
  while(swapped) {
    swapped = false;
    for(var i = 0; i < arrSize-1; i++) {
      if(someArray[i] > someArray[i+1]) {
        swap(someArray, i, i+1);
        swapped = true; 
      }
    }
  }
}


function swap(someArray, x, y) {
  var temp = someArray[x];
  someArray[x] = someArray[y];
  someArray[y] = temp;
}

function draw() {
  scale(10, 1);
  background(50);
  stroke(255, 0, 0);
  for(var i=0; i < arrSize; i++) {
    line(i, height, i, height-arr[i]);
  }
}
