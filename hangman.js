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

const game1 = new Hangman('Dog', 2)
game1.makeGuess('d')
game1.makeGuess('r')
game1.makeGuess('s')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

const game2 = new Hangman('Hello World', 4)
game2.makeGuess('l')
console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)