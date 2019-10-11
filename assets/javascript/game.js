    var guessNum = 10;
    $("#guess-left-num").html(guessNum);
    var winNum = 0;
    $("#win-num").html(winNum);
    var lossNum = 0;
    $("#loss-num").html(lossNum);

    var validInput = ["q", "w", "e","r","t","y","u","i","o","p",
                        "a","s","d","f","g","h","j","k","l",
                        "z","x","c","v","b","n","m"];

    var compGuess = validInput[Math.floor(Math.random() * 26)];
    console.log(compGuess);

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
                        
    document.onkeyup = function(event) {
        var userKey = event.key;
        console.log(userKey);

        //-------------------------------------------------------------------------
        //-------------------------------------------------------------------------

        if (validInput.includes(userKey)) {

            //CORRECT STATE
            //If correct, display a win, add to wins, delete the guesses,
            //reset the guess count and set new letter.
            if (compGuess == userKey){
                alert("You got it!");
                winNum++;
                $("#guess-arr").html("");
                $("#win-num").html(winNum);
                compGuess = validInput[Math.floor(Math.random() * 26)];
                guessNum = 10;
                $("#guess-left-num").html(guessNum);
            }

            //--------------------------------------------------------------------
            //--------------------------------------------------------------------

            //INCORRECT STATE
            //if incorrect guess, update guess count, show previous guess in
            //tracked guesses field.
            else if (compGuess != userKey){
                guessNum--;
                $("#guess-left-num").html(guessNum);
                $("#guess-arr").append(", " + userKey);

                //LOSE STATE
                //If guesses left is 0, reset the entire game including
                // guesses left reset, new computer guess,
                // and add to the losses obtained.
                if (guessNum == 0) {
                    guessNum = 10;
                    $("#guess-left-num").html(guessNum);
                    compGuess = validInput[Math.floor(Math.random() * 26)];
                    lossNum++;
                    $("#loss-num").html(lossNum);
                    $("#guess-arr").html("");
                    alert("loss! The answer was: " + compGuess);
                }
            }

            //--------------------------------------------------------------------
            //--------------------------------------------------------------------

            //If this is ran, something is REALLY wrong with the code.
            else {
                alert("something is not working right!");
            }

        }

        //------------------------------------------------------------------------
        //------------------------------------------------------------------------

        //INVALID INPUT
        //This runs if you enter something that isn't a letter.
        else{
            alert("Not a letter! go again!");
        }
    }