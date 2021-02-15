// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t


const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Dog', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('Hello World', 4)
console.log(game2.getPuzzle())