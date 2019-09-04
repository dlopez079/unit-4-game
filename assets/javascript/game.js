//BEGIN DOCUMENT READY!!!!!
$(document).ready(function() {

//Create the variables that are needed to execute the game********************************* 
console.log("hookedup");

var wins = 0;
var losses = 0;
var randomNumber;
var totalScoreNum = 0;
var redCrystalbtn;
var blueCrystalbtn;
var yellowCrystalbtn;
var greenCrystalbtn;


//NOTES***************************************************************************************
//Develop a random number generator so you can place it in the randonNum between 19 - 120.
// Math.floor used to round up the number in parenthesis
// Math.random will generate a random number.  
// Min = 19
// Max = 120


//Develop a wins counter.
//If (random = totalScoreNum) then run the following: 
    //There are three things that happen here
        //win++
        //reset randomNumber
        //reset totalScoreNum   

//Develop a losses counter.
//If (random != totalScoreNum) then run the following: 
    //There are three things that happen here
        //losses++
        //reset randomNumber
        //reset totalScoreNum 

//Develop a total score counter. 

//INTIALIZE GAME - HOW GAME IS GOING TO START!***********************************************
function iniGame() {
    // Multiply the math.random() to (Max - Min) + Min;
    randomNumber = Math.floor (Math.random() * (120 - 19) + 19);

    //Attach randomNumber to HTML randomnumber
    $("#randomNum").text(randomNumber);

    //Develop a random number for the Red Crystal
    redCrystalbtn = Math.floor (Math.random()* (12) + 1);

    //Develop a random number for the Blue Crystal
    blueCrystalbtn = Math.floor (Math.random()* (12) + 1);

    //Develop a randon number for the Yellow Crystal
    yellowCrystalbtn = Math.floor (Math.random()* (12) + 1);

    //Develop a random number for the Green Crystal
    greenCrystalbtn = Math.floor (Math.random()* (12) + 1);

    //Attach Total score to HTML > userScore 
    $("#userScore").text(totalScoreNum);
}

//CALL THE FUNCTION ************************************************************************
iniGame();



//DEVELOP THE GAME PLAY FUNCTION************************************************************
function playGame() {

    //Develop button click for RED CYRSTAL
    $("#redCrystal-btn").click(function() {
        totalScoreNum += redCrystalbtn;
        $("#userScore").text(totalScoreNum);
        gameCond();
    })

    $("#blueCrystal-btn").click(function() {
        totalScoreNum += blueCrystalbtn;
        $("#userScore").text(totalScoreNum);
        gameCond();
    })

    $("#yellowCrystal-btn").click(function() {
        totalScoreNum += yellowCrystalbtn;
        $("#userScore").text(totalScoreNum);
        gameCond();
    })

    $("#greenCrystal-btn").click(function() {
        totalScoreNum += greenCrystalbtn;
        $("#userScore").text(totalScoreNum);
        gameCond();
    })
} //END GAME PLAY FUNCTION ***************************************************************

//CALL THE  PLAYGAME FUNCTION
playGame();



//DEVELOP GAMING CONDITIONS *************************************************************
function gameCond(){

    //TotalScoreNum ===randomNumber
    if (totalScoreNum === randomNumber) {
        wins++; //This will increment the wins total
        $("#wins").text(wins); //The wins increment will update on html
        iniGame(); //restart to the initial game
    } 
    
    //TotalScoreNum > randomNumber
    else if (totalScoreNum > randomNumber) { 
        losses++; //This will increment the losses total
        $("#losses").text(losses); //The losses increment will update on html
        iniGame(); //restart to the initial game
    } 
} // END OF GAMING CONDITIONS************************************************************

}); //END OF DOCUMENT READY!!!!