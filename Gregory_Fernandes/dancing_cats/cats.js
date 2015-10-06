var movePixels = 10;
var delayMs = 500;
var fasterDelayMs = 0;
var catTimer = null;
var catImage = null;
var catImg = null;

var catDance = function(){

    catImg.src = "meow_dance.gif";

}

var goRight = true;

var catWalk = function(){
  
  catImage = document.getElementById('cat');
  catImg = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(catImg.style.left, 10);  //converts string to integer
  //console.log("currentLeft is: " + currentLeft);

  if(goRight === true) {
    catImg.style.left = (currentLeft + movePixels) + 'px';

    //console.log(" ---o--- currentLeft ----o---- " + currentLeft);

    /*if((currentLeft > (window.innerWidth/2 - catImg.width/2))  &&  (currentLeft < (window.innerWidth/2))){
    
      //console.log(" ------ currentLeft -------- " + currentLeft);
      catImg.src = "meow_dance.gif";
      //catTimer = window.setInterval(catWalk, 2000);
      //window.clearInterval(catTimer);
      //stopCatWalk();
      //startCatWalk();

    } else{
      catImg.src = "meow.gif";
    }*/

  }else{   //backwards
    catImg.style.left = (currentLeft - movePixels) + 'px';

  }
  
  //console.log ("*********** " + window.innerWidth + " *********** " + catImg.width);
  if(currentLeft > (window.innerWidth - catImg.width) && goRight === true) {
    //catImg.style.left = window.innerWidth ;                     //reset left position of image
    goRight = false;                                  //change goRight flag
    //catImg.src = "meow-reverse.gif";                                  // flip image
    catImg.style.transform = "scaleX(-1)";

  } 
  else if(currentLeft < 0 && goRight === false) {
    //catImg.style.left = '0px';                                  //reset left position of image
    goRight = true;                                   //change goRight flag
    //catImg.src = "meow.gif";                                   // flip image
    catImg.style.transform = "scaleX(1)";
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

