


var savingsBalance = 0;
var checkingBalance = 0;

var savingsInput = 0.0;
var checkingInput = 0.0;

//// GET INPUTS

function getSavingsInput(){
  return parseFloat(document.getElementById("savings_input").value, 10); 
}

function getCheckingInput(){
  return parseFloat(document.getElementById("checking_input").value, 10);
}

//// DISPLAY BALANCES

function displaySavingsBalance(saving){
  document.getElementById("savings_balance").innerHTML = ("$" + saving);
  
}

function displayCheckingBalance(check){
  document.getElementById("checking_balance").innerHTML = ("$" + check);

}

function displayMessage(msg){
  document.getElementById("result").innerHTML = msg;
}

// CALCULATE NEW BALANCES
function savingsDeposit(){
  displayMessage("");
  //console.log("savingsDeposit");
  savingsBalance += getSavingsInput();
  displaySavingsBalance(savingsBalance);
}

function savingsWithdraw(){
  displayMessage("");
  //console.log("savingsWithdraw");
  var savInput = getSavingsInput();
  if(savingsBalance >= savInput){
    savingsBalance -= savInput;
  }else if( (savingsBalance + checkingBalance) >= savInput ) {
    checkingBalance = checkingBalance - (savInput - savingsBalance);
    savingsBalance = 0;
    displayCheckingBalance(checkingBalance);
  }else {
    displayMessage("You have insufficient balance in your accounts");
  }
  displaySavingsBalance(savingsBalance);
}

function checkingDeposit(){
  displayMessage("");

  //console.log("savingsDeposit");
  checkingBalance += getCheckingInput();
  displayCheckingBalance(checkingBalance);
}

function checkingWithdraw(){
  //console.log("checkingWithdraw");
  displayMessage("");

  var cheInput = getCheckingInput();
  if(checkingBalance >= cheInput){
    checkingBalance -= cheInput;
  }else if( (checkingBalance + savingsBalance) >= cheInput ) {
    savingsBalance = savingsBalance - (cheInput - checkingBalance);
    checkingBalance = 0;
    displaySavingsBalance(savingsBalance);
  }else{
    displayMessage("You have insufficient balance in your accounts");
  }
  displayCheckingBalance(checkingBalance);
}


document.getElementsByTagName("button")[0].addEventListener('click', savingsWithdraw);
document.getElementsByTagName("button")[1].addEventListener('click', savingsDeposit);
document.getElementsByTagName("button")[2].addEventListener('click', checkingWithdraw);
document.getElementsByTagName("button")[3].addEventListener('click', checkingDeposit);