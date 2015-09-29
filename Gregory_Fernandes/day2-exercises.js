//####################### author: Greg Fernandes
//#1: Which number is bigger

function greaterNumber(num1, num2){

  if(num1 > num2)
    return num1;
  else 
    return num2;

}


console.log("#####################1: Which number is bigger");
var n1, n2;

//Call function - 1
n1=5;
n2=10;

var great = greaterNumber(n1, n2); 
console.log("The greater of " + n1 + " and " + n2 + " is " + great );

//Call function - 2
n1=11;
n2=10;
var great = greaterNumber(n1, n2); 
console.log("The greater of " + n1 + " and " + n2 + " is " + great );



//##########################
//#2: The World Translator
function helloWorld(langCode) {

  if(langCode === 'sp'){
    return "Hola Mundo";
  }else if(langCode === 'it'){
    return 'Ciao Mondo';
  }else if(langCode === 'po'){
    return 'Ola Mundo';
  }
  
  return 'Hello World';

}

console.log("#####################2: The World Translator");

var languageCodes = ['sp', 'po', 'it', ' '];

for (var i=0; i<languageCodes.length; i++) {
  
  console.log("The translation for code " + languageCodes[i] + " is " + helloWorld(languageCodes[i]));

}

//############################
//#3:  The Grade Assigner

function assignGrade(score){

  if(score >=0 && score <40) {
    return "F";
  } else if (score >=40 && score <60) {
    return "E";
  } else if (score >=60 && score <70) {
    return "D";
  } else if (score >=70 && score <80) {
    return "C";
  } else if (score >=80 && score <90) {
    return "B";
  } else if (score >=90 && score <=100) {
    return "A";
  } else
    return "not found as the score is 'An Invalid Score'";

}

console.log("#####################3: The Grade Assigner");

var scores = [23, 34, 0, 100, 3434, 34, 90];
for (var i=0; i<scores.length; i++) {
  
  console.log("The grade for score " + scores[i] + " is " + assignGrade(scores[i]));

}

//############################
//#4 The Pluralizer

function collectiveNouns(noun){

  if(noun === 'sheep'){
    return "sheep";
  }else if(noun === 'goose'){
    return "geese";
  } else if (noun === 'mouse') {
    return "mice";
  }else {
    return " ";
  }

}


function pluralize(noun, number){

  var plural = "";

  if (number == 1) {
    plural = number + " " + noun ;
    return plural;
  } else {

    var plural = collectiveNouns(noun);
    if (plural === " ") {
      plural = number + " " + noun + "s";
    } else {
      plural = number + " " + plural;
    }
    return plural;
  }

}


console.log("#####################4: The Pluralizer");

var numbers = [23, 1, 0, 34, 23, 45, 23, 24, 2, 1];
var nouns = ["cat", "monkey", "book", "room", "beer", "can", "sheep", "mouse", "mouse", "mouse"];

for (var i=0; i<numbers.length; i++) {
  
  console.log( numbers[i] + " and " + nouns[i] + " is " + pluralize(nouns[i], numbers[i]));

}


//############################
//#5 Multiplication Tables

console.log("#####################5: Multiplication Tables");

for(var i =0; i<=10; i++){
  for(var j=0; j<=10; j++){
    console.log(i + " * " + j + " = " + i*j );
  }
}


//############################
//#6 The Grade Assigner


function assignGrade(score){

  if(score >=0 && score <40) {
    return "F";
  } else if (score >=40 && score <60) {
    return "E";
  } else if (score >=60 && score <70) {
    return "D";
  } else if (score >=70 && score <80) {
    return "C";
  } else if (score >=80 && score <90) {
    return "B";
  } else if (score >=90 && score <=100) {
    return "A";
  } else
    return "not found as the score is 'An Invalid Score'";

}

console.log("#####################6: The Grade Assigner - revisited");

for (var i=69; i<=100; i++) {
  
  console.log("For  " + i + " you got a  " + assignGrade(i));

}
















