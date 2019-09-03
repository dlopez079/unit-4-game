//Create the variables that are needed to execute the game. 

var wins = 0;
var losses = 0;
var redCrystalnum = 0;
var blueCrystalnum = 0;
var yellowCrystalnum = 0;
var greenCrystalnum = 0;
var totalScoreNum;

//Create a function to update display on HTML
function updateDisplay () {
    document.querySelector("randomNum").innerHTML = randomCPUnum;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#redCrystal").innerHTML = redCrystalnum;
    document.querySelector("#blueCrystal").innerHTML = blueCrystalnum;
    document.querySelector("#yellowCrystal").innerHTML = yellowCrystalnum;
    document.querySelector("#greenCrystal").innerHTML = greenCrystalnum;
    document.querySelector("#userScore").innerHTML = totalScoreNum;
}


//Generate function for random computer number. 
function randomCPUnum() {
    var x = Math.floor((Math.random() * 99) + 1);
    document.getElementById("#randomNum").innerHTML = x;
  }
