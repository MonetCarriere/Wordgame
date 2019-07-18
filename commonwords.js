//array of words

var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

  // pick a random word from the words array

  var word = commonWords[Math.floor(Math.random() * commonWords.length)];

  // sets up the answerArray to show how many letters there are using _'s to try to guess the answer

  var answerArray = [];

  for (var i=0; i<word.length; i++); {
      answerArray[i] = "_"
  }

// create a variable to hold the remaining number of remainingLetters to be guessed

var remainingLetters = word.length;


//   ******* THE MAIN GAME LOOP ********

// while there are letters left to be guessed

while (remainingLetters > 0) {
    //show the player their progress
    alert(answerArray.join(" "))

    //get a guess from the player
    var guess = prompt("Guess a letter, or click cancel to stop playing");

    //if the guess is blank
    if (guess == null) {
        //exit the game loop
        break;
    //if the guess is more than one letter or no letters
    }else if (guess.length !== 1) {
        //alert them to guess a single letter only;
        alert("Please enter a single letter.")
        //valid guess
    }else{
        //update the game state with the guess
        for(var j = 0; j<word.length; j++) {
            //if the letter they guessed is in the word at that point or index
            if (word[j] === guess) {
                //update the answer array with the letter they guessed at that point or index
                answerArray[j] = guess
                //subtract one from remaining letters
                remainingLetters--
            }
        }
    }
//  ******* END OF THE MAIN GAME LOOP ********
}
// let player know the word
alert(answerArray.join(" "));
//congradulate the player
alert("Good job! The answer was" + word);