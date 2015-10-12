var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc \"Merry\" Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

var baddies = [
  "Sauron",
  "Saruman", 
  "The Uruk-hai", 
  "Orcs"
];

var lands = ["The Shire", "Rivendell", "Mordor"];

//############################1
function makeMiddleEarth(lands) {
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land  
    var $newSection = $('<section>').attr('id', "middle-earth").html("MIDDLE EARTH");
    _.each(lands, function(elem){
        var $newArticle = $('<article>');
        $newSection.append($newArticle);
        var $newH1 = $('<h1>').html(elem);
        $newArticle.append($newH1);
      }
    );
    $('body').append($newSection);    
}
//Call the function
makeMiddleEarth(lands);


//#############################2
function makeHobbits(hobbits) {
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of hobbit
  var $newUl = $('<ul>');
  _.each(hobbits, function(elem){
      var $newLi = $('<li>').html(elem);
      $newUl.append($newLi);
    }
  );
  $('section article').eq(0).append($newUl);
}
//Call the function
makeHobbits(hobbits);

//############################# 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // add the ring as a child of Frodo
  var $newDiv = $('<div>').attr('id', "the-ring");
  var $Li1 = $('article li').eq(0);
  $Li1.append($newDiv);
}
//Call the function
keepItSecretKeepItSafe();


//############################# 4
function makeBaddies(baddies) {
  // display an unordered list of baddies in Mordor
  var $newUl = $('<ul>');
  _.each(baddies, function(elem){
      var $newLi = $('<li>').html(elem);
      $newUl.append($newLi);
    }
  );
  $('section article').eq(2).append($newUl);
  //$($('section article')[2]).append($newUl);
}
//Call the function
makeBaddies(baddies);

//############################# 5
function makeBuddies(buddies) {
  // create an aside tag
  // display an unordered list of buddies in the aside
  // Make the Gandalf text node have a grey background
  var $newAside = $('<aside>').html("ASIDE");   //Should this float right?
  var $newUl = $('<ul>');
  _.each(buddies, function(elem){
      var $newLi = $('<li>').html(elem);
      $newUl.append($newLi);
    }
  );
  $newAside.append($newUl); 
  $('body').append($newAside); 

  $('aside li').eq(0).attr('style', 'background-color:grey');

  //var $gandalf = $('aside li');
}
makeBuddies(buddies);

//######################### 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var $hobbits = $('article ul').eq(0);
  $('article').eq(1).append($hobbits);
}
leaveTheShire();

//######################### 7
function beautifulStranger() {
  // change the buddy 'Strider' textnode to "Aragorn"
  var $strider = $('aside li').eq(3);
  $strider.html("Aragorn").attr('style', 'color:red');
}
beautifulStranger();

//########################## 8
function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  //cannot move hobbits to rivendale, they are already in rivendale????????????????????????
  var $buddies = $('aside ul');
  $('article').eq(1).append($buddies);

  //do we delete aside here? It's an orphan????????????????????????????????????????????????

  //create new div
  var $newDiv = $('<div>').attr('id', 'the-fellowship').html("THE FELLOWSHIP");
  $('article').eq(1).append($newDiv);
  var $newUl = $('<ul>');
  $newDiv.append($newUl);

  $hobbits = $('article').eq(1).children('ul').eq(0).children('li');
  _.each(hobbits, function(elem){ 
      var $newLi = $('<li>').html(elem);
      $newUl.append($newLi); 
      console.log(elem + " has been added to the fellowship");            
    } 
  );

  _.each(buddies, function(elem){
      var $newLi = $('<li>').html(elem);
      $newUl.append($newLi);
      console.log(elem + " has been added to the fellowship"); 
    }
  );


}
forgeTheFellowShip();

//#########################9
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  var $gandalf = $('article').eq(1).children('ul').eq(1).children('li').eq(0);
  $gandalf.html("Gandalf the white");
  $gandalf.attr("style", "background:white; border: solid grey");   //why does omiting the 'solid' not work?

}
theBalrog();

//#########################10
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
  // Remove Boromir from the Fellowship
  // Put Boromir in the Footer

  alert("the horn of gondor has been blown\n Boromir's been killed by the Uruk-hai!");
  $boromir = $('#the-fellowship ul').children('li').eq(8);         //can we avoid this hardcode????????????
  $boromir.attr("style", "text-decoration:line-through; color:red");

  $uruk = $('article').eq(2).children('ul').eq(0).children('li').eq(2);
  $uruk.attr("style", "background:red");         //how do we delete ???????????????????????

  $boromir.attr("style", "background:red");      //how do we delete ???????????????????????

  //put boromir in the footer   ??????????????????????????????????????????????
  var $newfooter = $('<footer>').html("FOOTER");
  var $newP = $('<li>').html("Boromir");             //remove hardcode ????????????????????????
  $newfooter.append($newP);
  $('body').append($newfooter);
}
hornOfGondor();


/*//#########################11
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor


}
itsDangerousToGoAlone();*/
var functionNumber = 1;

$('button').on('click', function(){
  switch(functionNumber){
    case 1: makeMiddleEarth(lands);
      functionNumber++;
      break;
    case 2: makeHobbits(hobbits);
      functionNumber++;
      break;
    case 3: keepItSecretKeepItSafe();
      functionNumber++;
      break;
    case 4: makeBaddies(baddies);
      functionNumber++;
      break;
    case 5: makeBuddies(buddies);
      functionNumber++;
      break;
    case 6: leaveTheShire();
      functionNumber++;
      break;
    case 7: beautifulStranger();
      functionNumber++;
      break;
    case 8: forgeTheFellowShip();
      functionNumber++;
      break;
    case 9: theBalrog();
      functionNumber++;
      break;
    case 10: hornOfGondor();
      functionNumber++;
      break;
    case 11: 
      functionNumber++;
      break;
    case 12:
      functionNumber++;
      break;
    case 13:
      functionNumber++;
      break;
    default:
      console.log("END");
  }
}
);















