// canvas vars
var width;
var height;

// array vars
var arr = [];
var arrSize;
var zoom = 10;

// sorting vars
var swapped = false;
var i = 0; j = 0;



function setup() {
  width = 600;
  height = 400;
  createCanvas(width, height);
  background(50);

  initArray();
  
  //sort(arr);
  //bubblesort(arr);
  //bubblesortOptimized(arr);
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

function drawArrayStraight() {
  scale(zoom, 1);
  for(var k = 0; k < arrSize; k++) {
    
    if(k == j) {
      stroke(255,0,0);
    }
    else if(k >= arrSize-i) {
      stroke(0,255,0);
    }
    else {
      stroke(255,155,255);
    }
    line(k, height, k, height-arr[k]);
  }
}


function drawArrayCircular() {
  scale(1,1);
  var angle = (2*PI/ arrSize);
  
  for(var k = 0; k < arrSize; k++) {
   
    if(k == j) {
      stroke(255,0,0);
    }
    else if(k >= arrSize-i) {
      stroke(0,255,0);
    }
    else {
      stroke(255,155,255);
    }

    angleMode(RADIANS);
    var lenght = floor(map(height-arr[k], 0, height, 0, height/2));
    var y = height/2 + lenght*sin(angle*k);
    var x = width/2 + lenght*cos(angle*k);

    line(width/2, height/2, x, y);
  }
}

function draw() {
  background(50);
  //frameRate(1);

  // update state
  if(arr[j] > arr[j+1]) {
    swap(arr, j, j+1);
  }
  j++;
  if(j >= arrSize-i) {
    j = 0;
    i++;
  } 

  // draw new state
  //drawArrayCircular();
  drawArrayStraight();

  // stop if done
  if(i >= arrSize-1) {
    noLoop();
  }

}
