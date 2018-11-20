// canvas vars
var width;
var height;

// array vars
var arr = [];
var arrSize;
var zoom = 10;

// sorting vars
var swapped = true;
var index = 0;



function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  background(50);

  initArray();
  
  //sort(arr);
  //bubblesort(arr);
  bubblesortOptimized(arr);
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

function bubblesortOptimized(someArray) {
  for(var i = 0; i < arrSize-1; i++) {
    for(var j = 0; j < arrSize-i; j++) {
      if(someArray[j] > someArray[j+1]) {
        swap(someArray, j, j+1);
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
  frameRate(10);

  for(var i = 0; i < arrSize; i++) {
    stroke(255, 155, 255);
    line(i, height, i, height-arr[i]);
  }

}
