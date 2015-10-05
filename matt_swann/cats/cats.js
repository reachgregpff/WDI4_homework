$.fn.pulseSize = function() {
    var pulseTime = 1000,
        pulseDiff = 150;

    this.animate({height:'+='+pulseDiff,
                  width:'+='+pulseDiff},pulseTime*.2,function(){
        $(this).animate({height:'-='+pulseDiff,
                         width:'-='+pulseDiff},pulseTime*.8,function(){
            $(this).pulseSize();
        });
    });
};



var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var catWalk = function() {
  var img = document.getElementsByTagName('img')[0];


  var currentLeft = parseInt(img.style.left);
  console.log(currentLeft);

  // defines the direction
  if (currentLeft > (window.innerWidth-img.width)) {
    direction = -1;
    // console.log("direction = -1");
    // flips image
    img.style.transform = 'scaleX(-1)';
  } else if (currentLeft <= 0){
    direction = 1;
    // console.log("direction = 1");
    img.style.transform = 'scaleX(1)';

  }

  if (currentLeft >=((window.innerWidth-img.width)/2)) {
    // console.log("at mid screen");
    img.style.transform = 'scaleX(-1)';
  }


  if (direction === 1) {

    img.style.left = (currentLeft + movePixels) + 'px';

  } else if (direction === -1) {

    img.style.left = (currentLeft - movePixels) + 'px';
  }

}

var startCatWalk = function() {
  if (catTimer == null){
  catTimer = window.setInterval(catWalk, delayMs);
  }
}

var stopCatWalk = function() {
  movePixels = 5;
  clearInterval(catTimer);
  catTimer = null;
}

var fasterCatWalk = function() {
  movePixels += 5;
}


var looper;
var degrees = 0;
function rotateAnimation(img, speed){
	var cat = document.getElementsByTagName('img')[0]
	cat.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+img+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}

disco.addEventListener('click', function(){
	rotateAnimation('img', 10);
});

  pulse.addEventListener('click', function(){
    $('img').pulseSize();
  });


  startButton.addEventListener('click', startCatWalk);

  stopButton.addEventListener('click', stopCatWalk);

  speedButton.addEventListener('click', fasterCatWalk);


var counter = 0;
var colors = [
    "#eeeeee",
    "#00ff00",
    "#ff0000",
    "#000000"];

var $div = $('body');

$('body').mouseenter(function () {
    var color = colors.shift(); //Get the top color
    colors.push(color); //push it to the end for the cycle to repeat.
    $div.css({
        "background-color": color
    })

});



$(document).ready(function(e) {
  var newfishid = 0;

  $('.post-button').click( function(e) {

    var fish = $("<div/>", {"class":"large-fish fish", "id" : "fish"+(newfishid++)});

    $('#container').append(fish);

    fish.on("anim", function(e){
      var _this = $(this),
      theContainer = $("#container"),
      maxLeft = theContainer.width() - _this.width() - 50,
      maxTop = theContainer.height() - _this.height(),
      leftPos = Math.floor(Math.random() * maxLeft),
      topPos = Math.floor(Math.random() * maxTop) + 100,
      imgRight = "http://www.anniemation.com/clip_art/images/cat-walk.gif",
      imgLeft = "cat-walk2.gif";
      if (_this.position().left < leftPos) {
        _this.css("background-image", 'url("' + imgRight + '")');
      } else {
        _this.css("background-image", 'url("' + imgLeft + '")');
      }

      _this.animate({
        "left": leftPos,
        "top": topPos
      }, 2500, function(){
        $(this).trigger("anim");
      });
    });
    fish.trigger("anim");

    fish.hover(function(e) {
      $(this).stop();
    }, function(e) {
      $(this).trigger("anim");
    });
  });

});
