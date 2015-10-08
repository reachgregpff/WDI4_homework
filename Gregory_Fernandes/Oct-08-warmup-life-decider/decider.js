function elemFind(element){
  switch(element.charAt(0)) {
    case '#':
      return[document.getElementById(element.slice(1))]; 
    case '.': 
      return document.getElementsByClassName(element.slice(1));
    default:
      return document.getElementsByTagName(element); 
  }
}

function reset(){
  heads = 0;
  tails = 0;
}

function coinFlip(){
  var coin_side = Math.floor(Math.random()*2);
  
  // if HEADS
  if(coin_side === 1){
    elemFind("#main_pic")[0].src="George_Washington_Presidential_$1_Coin_obverse.png";
    heads++;
    console.log(coin_side + "HEADS count is: " + heads);
    elemFind("#headwins")[0].innerHTML = "Head wins: " + heads;
  } else{   //if TAILS
    elemFind("#main_pic")[0].src="George_Washington_Presidential_$1_Coin.png";
    tails++;
    console.log(coin_side + "TAILS count is: " + tails);
    elemFind("#tailwins")[0].innerHTML = "Tail wins: " + tails;
  }

  //check if we have a winner
  if(heads === 5) {
    console.log("WINNER : heads!");
    elemFind("#main_pic")[0].src="Congrats.png";
    // add reset  here
    reset();
  }else if(tails === 5){
    console.log("WINNER : tails!");
    elemFind("#main_pic")[0].src="Congrats.png";
    // add reset  here
    reset();
  }
}

var heads = 0;
var tails = 0;


elemFind("#flip_button")[0].addEventListener('click', coinFlip);

