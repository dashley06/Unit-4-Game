
var userLoss=0;
var userWins=0;
var totalSum= [];
var x = 0;

//document ready
$(document).ready(function() {

//function to restart game
function restart (){
randomNum = Math.floor((Math.random()* 120) + 19);
    $("#random").text(randomNum);
crystOneNum= "";
crystTwoNum= "";
crystThreeNum= "";
crystFourNum= "";
x = 0;
$("#userScore").text("");
}
    
//random # that computer chooses
randomNum = Math.floor((Math.random()* 120) + 19);
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
    totalSum.push(crystOneNum);
    addTogether();
    $("#userScore").text(x);
    evaluateWin();
    //console.log(totalSum);
  });

$("#crystal2").on("click", function() {
    totalSum.push(crystTwoNum);
    addTogether();
    $("#userScore").text(x);
    evaluateWin(); 
    //console.log(totalSum); 
  });

  $("#crystal3").on("click", function() {
    totalSum.push(crystThreeNum); 
    addTogether();
    $("#userScore").text(x);
    evaluateWin();
    //console.log(totalSum);
    
  });

  $("#crystal4").on("click", function() {
    totalSum.push(crystFourNum); 
    addTogether();
    $("#userScore").text(x);
    evaluateWin();
    //console.log(totalSum);
  });

  
function addTogether(){
    for (var i = 0; i < totalSum.length; i++) {
    x += totalSum[i];
    console.log(x);
  }
}
function evaluateWin() {
    if(randomNum === x){
        userWins++;
        $("#wins").text(userWins);
        alert("Yay! You Won!");
        restart();
    }
   else if (randomNum < x){
        $("#userScore").text(x);
        userLoss++;
        alert("Awww....You Lost");
        restart();
    }
  }
});