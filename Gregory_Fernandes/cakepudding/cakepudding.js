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

var heroes = ["magneto", "flash", "metamorpho", "storm", "superman", "scarlet", "falcon", "wolverine", "spiderman", 
              "batgirl", "batman", "robin", "antman", "hulk", 
              "thing", "loki", "thor", "hellboy", "iceman"];

var randomHero = ""; 
var maskedWord = "";
var lettersEnteredSoFar = "";
var turnsLeft = null; 
var matchCount = null;

function startGame() {

  //initialize variables
  randomHero = "";
  maskedWord = "";
  lettersEnteredSoFar = "";
  turnsLeft = null;
  matchCount = null;

  //Get secret word -------- random hero name
  elemFind("#secret_word")[0].innerHTML = "";
  elemFind("#main_pic")[0].src="marvel_character_group-crop.jpg";
  elemFind("#letters_entered")[0].innerHTML = "";

  randomHero = heroes[Math.floor(Math.random()*heroes.length)];
  randomHero = randomHero.toUpperCase();
  console.log(randomHero);

  //Update the turns remaining count to 7
  turnsLeft = 7
  elemFind("#turns_remaining")[0].innerHTML = "TURNS LEFT : " + turnsLeft;

  //display underscores for secret word
  for(var i=0; i<randomHero.length; i++) {
    maskedWord += '_';
  }
  elemFind("#secret_word")[0].innerHTML = maskedWord.split('').join(' ');

  //initialize matchCount
  matchCount = 0;
}

function isLetterCorrect() {
  //get the letter that was entered from the name of the button
  letter = event.target.innerHTML;

  //check if letter was already entered
  if(lettersEnteredSoFar.indexOf(letter) != -1) {
    return;
  }

  // Update "You have entered xxxxx letters"
  lettersEnteredSoFar +=letter;       
  //console.log(lettersEnteredSoFar);
  elemFind("#letters_entered")[0].innerHTML = lettersEnteredSoFar; 

  //If letter is in secret word, then replace underscores in maskedWord with letter
  var matchFound = false;
  for(var i=0; i<randomHero.length; i++) {
    if(letter === randomHero[i]) {
      maskedWord = maskedWord.substr(0, i) + letter + maskedWord.substr(i+1);
      //console.log(maskedWord);
      matchCount ++;
      matchFound = true;
    }
  }  //end of for loop

  if(matchFound === true){
    //Display naskedWord replaced with letter
    elemFind("#secret_word")[0].innerHTML = maskedWord.split('').join(' ');
  } else {
    //match not found -----------------decrement turnsLeft and display decremented count
    turnsLeft-- ;
    elemFind("#turns_remaining")[0].innerHTML = "TURNS LEFT : " + turnsLeft;
  }

  if(matchCount === randomHero.length) {
    elemFind("#main_pic")[0].src="Congrats.png";
  }else if(turnsLeft == 0) {
    elemFind("#main_pic")[0].src="Better Luck.jpg";
    elemFind("#secret_word")[0].innerHTML = "THE ANSWER IS " + randomHero;
  }
}

//Add event handlers to all buttons
elemFind("#start_button")[0].addEventListener('click', startGame );
for(var i=0; i<26; i++) {
  elemFind(".span-1")[i].addEventListener('click', isLetterCorrect );
}



