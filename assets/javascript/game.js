//Once page is fully loaded begin the work
$(document).ready(function() {

    //Initialize Variables
    var playerWins = 0;
    var playerLosses = 0;
    var cpuPick = 0;
    var roundScore = 0;
    var red = 0;
    var blue = 0;
    var yellow = 0;
    var green = 0;

    //CPU's random number generator
    randNum = function() {
        var cpuNum = Math.floor(Math.random() * 120 + 19);
        //Update CPU Guess for use later
        cpuPick += cpuNum;
        return cpuNum;
    }

    //Crystal number generator
    crystalNum = function() {
        var randCrystal = Math.floor(Math.random() * 12 + 1);
        return randCrystal;
    }

    //Crystal number assigner
    assignCrystal = function() {
        red += crystalNum();
        blue += crystalNum();
        yellow += crystalNum();
        green += crystalNum();
    }

    //Assign crystal values
    assignCrystal();

    //Display starting round score of 0
    $("#roundScore").html(roundScore);

    //Display random number
    $("#gameNum").html(randNum());

    //Game mechanics
    $("button").on("click", function() {
        //Assign correct values based on clicks
        if (this.id === "redCrystal") {
            roundScore += red;
        } else if (this.id === "blueCrystal") {
            roundScore += blue;
        } else if (this.id === "yellowCrystal") {
            roundScore += yellow;
        } else if (this.id === "greenCrystal") {
            roundScore += green;
        }

        //Update Score to reflect click
        $("#roundScore").html(roundScore);

        //Check if player wins or loses
        winLose();
    });

    //Function to check for wins or losses
    winLose = function() {
        //Winning condition
        if (roundScore === cpuPick) {
            playerWins += 1;
            $("#wins").html(playerWins);
            alert("You Win!");
            gameReset();
        //Lossing condition
        } else if (roundScore > cpuPick) {
            playerLosses += 1;
            $("#losses").html(playerLosses);
            alert("You Lose!");
            gameReset();
        }
    }

    //Game reset function
    gameReset = function() {
        roundScore = 0;
        $("#roundScore").html(roundScore);
        red = 0;
        blue = 0;
        yellow = 0;
        green = 0;
        cpuPick = 0;
        assignCrystal();
        $("#gameNum").html(cpuPick += randNum());
    }
});