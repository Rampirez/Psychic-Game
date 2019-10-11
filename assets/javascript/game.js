$(document).ready(function() {

    var guessNum = 10;
    var winNum = 0;
    var lossNum = 0;

    var validInput = ["q", "w", "e","r","t","y","u","i","o","p",
                        "a","s","d","f","g","h","j","k","l",
                        "z","x","c","v","b","n","m"];

    var compGuess = validInput[Math.floor(math.random() * 26)];

                        
    document.onkeyup = function(event) {
        var userKey = event.key;

        if (validInput.includes(userKey)) {

            if (compGuess == userKey){
                alert("You got it!");
                winNum++;
                $("#guess-arr").html("");
                compGuess = validInput[Math.floor(math.random() * 26)];

            }

        //First Guess
        $("guess-arr").html(userKey);

        //Number of guesses left
        $("guess-left-num").html(guessNum);

        //Next guesses line up on the line
        //Don't forget to wipe list once a game starts over
        $("guess-arr").append(", " + userKey);

        //Win count
        $("win-num").html(winNum);

        //Loss count
        $("loss-num").html(lossNum);

        }
        else{
            alert("Not a letter! go again!");
        }
    }


});