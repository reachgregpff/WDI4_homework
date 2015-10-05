var movePixels = 10;
var delayMs = 500;
var fasterDelayMs = 0;
var catTimer = null;
var catImage = null;
var catImg = null;

var catDance = function(){

    catImg.src = "meow_dance.gif";

}

var direction = "forward";

var catWalk = function(){
  
  catImage = document.getElementById('cat');
  catImg = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(catImg.style.left, 10);  //converts string to integer
  //console.log("currentLeft is: " + currentLeft);

  if(direction === "forward") {
    catImg.style.left = (currentLeft + movePixels) + 'px';

    /*if((currentLeft > (window.innerWidth/2 - catImg.width))  &&  (currentLeft < (window.innerWidth/2 + catImg.width))){
    
      catImg.src = "meow_dance.gif";
      catTimer = window.setInterval(catWalk, 2000);
      window.clearInterval(catTimer);

    } else{
      catImg.src = "meow.gif";
    }*/

  }else{   //backwards
    catImg.style.left = (currentLeft - movePixels) + 'px';

  }
  
  //console.log ("*********** " + window.innerWidth + " *********** " + catImg.width);
  if(currentLeft > (window.innerWidth - catImg.width) && direction === "forward") {
    catImg.style.left = window.innerWidth ;                     //reset left position of image
    direction = "backward";                                  //change direction flag
    catImg.src = "meow-reverse.gif";                                  // flip image
 

  } 
  else if(currentLeft < 0 && direction === "backward") {
    catImg.style.left = '0px';                                  //reset left position of image
    direction = "forward";                                   //change direction flag
    catImg.src = "meow.gif";                                   // flip image
  }


}

var startCatWalk = function() {
  fasterDelayMs = 0;
  //console.log("Inside startCatWalk" + delayMs);
  catTimer = window.setInterval(catWalk, delayMs);
}

var fastCatWalk = function() {
  fasterDelayMs = fasterDelayMs + 200;
  //console.log("Inside startCatWalk" + delayMs);
  window.clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, (delayMs-fasterDelayMs));
}

var stopCatWalk = function(){
  fasterDelayMs = 0;
  //console.log("Stop cat");
  window.clearInterval(catTimer);
}

var startButton = document.getElementById('startB');
var goFasterButton = document.getElementById('gofastB');
var stopButton = document.getElementById('stopB');


startButton.addEventListener("click", startCatWalk);

goFasterButton.addEventListener("click", fastCatWalk);

stopButton.addEventListener('click', stopCatWalk);

