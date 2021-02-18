const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

//Method to calculate what status we are currently in (playing or game over)
Hangman.prototype.calculateStatus = function () {
    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    }
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

    this.calculateStatus()
}