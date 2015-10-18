function getInput( input) {
      console.log("Please enter the " + input + ":" );
      return prompt();
}

var message = getInput("message");
var keyword = getInput("keyword");
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var encryptedWord = [];

function encrypt(){
  message= message.split("");
  keyword=keyword.split("");
  var newKeyword = [];

  for(var i =0; i<message.length; i++) {
    newKeyword.push( keyword[i%(keyword.length)]);
    encryptedWord.push(alphabets[(alphabets.indexOf(message[i]) + alphabets.indexOf(newKeyword[i]))%alphabets.length]);
  }
}

encrypt();
$('h3').html("Message: " + message.join(" ") + "<br>Keyword: " + keyword.join(" ") );
$('h2').html("Your encrypted word is : "  + encryptedWord.join(" "));