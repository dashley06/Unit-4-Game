
var userLoss=0;
var userWins=0;
var totalSum = 0;

//document ready
$(document).ready(function() {
    
//random number that computer chooses
 var randomNum = Math.floor((Math.random()* 120) + 19);
$("#random").text(randomNum);

//assign random numbers for each crystal
    var crystOneNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal1").text(crystOneNum);
    console.log(crystOneNum);

    var crystTwoNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal2").text(crystTwoNum);
    console.log(crystTwoNum);

    var crystThreeNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal3").text(crystThreeNum);
    console.log(crystThreeNum);

    var crystFourNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal4").text(crystFourNum);
    console.log(crystFourNum);


//on-click event for each crystal image, adds to userScore for each click
$("#crystal1").on("click", function() {
    totalSum+=crystOneNum
    console.log('this1', this, "totalSum", totalSum);
    $("#userScore").text(totalSum);
    evaluateWin();
    //console.log(totalSum);
  });

$("#crystal2").on("click", function() {
    totalSum+=crystTwoNum;
    console.log('this2', this, "totalSum", totalSum);
    $("#userScore").text(totalSum);
    evaluateWin(); 
    //console.log(totalSum); 
  });

  $("#crystal3").on("click", function() {
    totalSum+=crystThreeNum;

    console.log('this3', this, "totalSum", totalSum);
    $("#userScore").text(totalSum)
    evaluateWin(); 
    //console.log(totalSum);
    
  });

  $("#crystal4").on("click", function() {
    totalSum+=crystFourNum;

    console.log('this4', this, "totalSum", totalSum);
    $("#userScore").text(totalSum);
    evaluateWin();
    //console.log(totalSum);
  });

  
function addTogether(){
    for (var i = 0; i < totalSum.length; i++) {
    return x += totalSum[i];
    //console.log(totalSum);
  }
}
function evaluateWin() {
    if(randomNum === totalSum){
        userWins++;
        $("#wins").text(userWins);
        alert("Yay! You Won! Your total score is: " + totalSum);
        restart();
    }
   else if (randomNum < totalSum){
       userLoss++;
        $("#loss").text(userLoss);
        alert("Awww....You Lost. Your total score is: " + totalSum);
        restart();
    }
  }

  //function to restart game
function restart (){
    randomNum = Math.floor((Math.random()* 120) + 19);
    crystOneNum = Math.floor((Math.random()* 12) + 1);
    crystTwoNum = Math.floor((Math.random()* 12) + 1);
    crystThreeNum = Math.floor((Math.random()* 12) + 1);
    crystFourNum = Math.floor((Math.random()* 12) + 1);
    totalSum = 0;
  $("#random").text(randomNum);
  $("#userScore").text("");
}
});