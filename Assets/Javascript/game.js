var crystal1 = document.getElementById("crystal1");
var crystal2 = document.getElementById("crystal2");
var crystal3 = document.getElementById("crystal3");
var crystal4 = document.getElementById("crystal4");
var crystalpic = document.getElementsByClassName("crystalpic");

var randomNum = document.getElementById("random");
var userScore = document.getElementById("userScore");
var userWins = document.getElementById("wins");
var userLoss = document.getElementById("loss");

//document ready
$(document).ready(function() {

//random # that computer chooses
randomNum = Math.floor((Math.random()* 120) + 19);
$("#random").text(randomNum);

//random numbers for each crystal
    var crystOneNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal1").text(crystOneNum);
    //console.log(crystOneNum);

    var crystTwoNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal2").text(crystTwoNum);
    //console.log(crystTwoNum);

    var crystThreeNum = Math.floor((Math.random()* 12) + 1);
    $("#crystal3").text(crystThreeNum);
    //console.log(crystThreeNum);

    var crystFourNum = Math.floor((Math.random()* 12) + 1);
    $("#random").text(crystFourNum);
    //console.log(crystFourNum);

//on-click event for each crystal image
$("#crystal1").on("click", function() {
    var newNumOne = crystOneNum += randomNum; 
    console.log("you clicked" + newNumOne);

  });

$("#crystal2").on("click", function() {
    var newNumTwo = crystTwoNum += randomNum; 
    console.log("you clicked" + newNumTwo);

  });

  $("#crystal3").on("click", function() {
    var newNumThree = crystThreeNum += randomNum; 
    console.log("you clicked" + newNumThree);

  });

  $("#crystal4").on("click", function() {
    var newNumFour = crystFourNum += randomNum; 
    console.log("you clicked" + newNumFour);

  });
//need a variable for user total
//if then loop for each crystal newNum === user total
//need loop for a win and push win
//need loop for a loss and push loss

});