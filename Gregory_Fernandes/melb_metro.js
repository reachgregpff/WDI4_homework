//PT PLANNER Sep 30

var PT = {

  journeyStops :[],

  TrainLines : [
  {trainLineName : "Alamein", stops : ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]},
  {trainLineName : "Glen Waverley", stops : ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]},
  {trainLineName : "Sandringham", stops : ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]},
  ],

  // Given a line and a stop, this finds the index of the stop in the list of stops
  findStop : function(line, stop){

      //console.log("Line: " + line + "Stop: " + stop);
      var stopIndex = PT.TrainLines[line].stops.indexOf(stop);
      
        return(stopIndex);
  },

  //Input: stop, Returns: TrainLine index that has the given stop
  findTrainLine : function(stop){

    //console.log("STOP IS: " + stop);

    for(var line=0; line<PT.TrainLines.length; line++){
      var stopIndex = PT.TrainLines[line].stops.indexOf(stop);
      
      if(stopIndex != -1){
        return line;
      } 
    }
    return -1;

  },

//Input line, origin, destination ---- creates the final journey of stops
  findRoute : function( line, origIndex, destIndex) {

    if(origIndex <= destIndex) {
      for(var i = origIndex; i<= destIndex; i++) {
        PT.journeyStops.push(PT.TrainLines[line].stops[i]);
      }
    } else {
      for(var i = origIndex; i>= destIndex; i--) {
        PT.journeyStops.push(PT.TrainLines[line].stops[i]);
      }
    }

  },

//Prints the final route
  printRoute : function(){

    /*console.log("Here's your route!");
    console.log(PT.journeyStops.join("--------->"));
    console.log( (PT.journeyStops.length-1) + " stops Total"); */

    var answer = document.getElementById("Your Route");
    //console.log(answer.innerHTML + "*************");
    answer.innerHTML = "Here's your route!<br>" + PT.journeyStops.join("--------->") + "<br>" + (PT.journeyStops.length-1) + " stops Total";

  }

}   // END OF OBJECT PT

/*function getInput( input) {
      console.log("Please enter the  " + input + " : ");
      return prompt();
}

origin = getInput("Origin");
destination = getInput("Destination");*/




//CALL functions to find the Train Line and stop of the origin

var plan = function()  {


var originLineIndex = PT.findTrainLine(origin); 
var originStopIndex = PT.findStop(originLineIndex, origin);
//console.log("Origin Line " + originLineIndex + " Origin Index = " + originStopIndex);


//CALL functions to find the Train Line and stop of the destination
var destinationLineIndex = PT.findTrainLine(destination);
var destinationStopIndex = PT.findStop(destinationLineIndex, destination);
//console.log("Destination Line " + destinationLineIndex + " Destination Index = " + destinationStopIndex);


if( originLineIndex == destinationLineIndex){   //Origin and destination are in the Same Train Line - easier
  PT.findRoute(originLineIndex, originStopIndex, destinationStopIndex );


}else {  // If origin and dest are in different lines
  //Find out position of Richmond in first line
  var richmondIndexInOrigin = PT.findStop(originLineIndex, "Richmond");
  var richmondIndexInDestination = PT.findStop(destinationLineIndex, "Richmond");

  PT.findRoute(originLineIndex, originStopIndex, richmondIndexInOrigin );


  if (richmondIndexInDestination < destinationStopIndex) { //Do not repeat Richmond in the second leg of the journey
    PT.findRoute(destinationLineIndex, richmondIndexInDestination+1, destinationStopIndex );
  }
  else{
    PT.findRoute(destinationLineIndex, richmondIndexInDestination-1, destinationStopIndex );
  }

}

console.log("ORIGIN is : " + origin);
console.log("DESTINATION is : " + destination);
PT.printRoute();

}

var origin = "Hawthorn";        //default values
var destination = "Flagstaff";  //default values

var planButton = document.getElementById('plan_button');
planButton.addEventListener('click', 
  function () {

    var originInput = document.getElementById("origin");
    origin = originInput.value;
    //console.log(origin);
    var destinationInput = document.getElementById("destination");
    destination = destinationInput.value;
    //console.log(destination);

    plan();
  });






/*console.log("Here's your route!");
console.log(PT.journeyStops.join("--------->"));
console.log( (PT.journeyStops.length-1) + " stops Total"); */

















