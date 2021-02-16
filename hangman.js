const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

//Method that gives puzzle back
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

//Method to make guesses
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isWrongGuess = !this.word.includes(guess)
    
    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isWrongGuess) {
        this.remainingGuesses--
    }
}

const game1 = new Hangman('Hello World', 4)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

//registers key presses
window.addEventListener('keypress', function (e) {
    //CharCode deprecated, grab key straight from property eg; e.key
    //console.log(e.key)
    const guess = String(e.key)
    console.log(guess)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})