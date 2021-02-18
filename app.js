const puzzleElement = document.querySelector('#puzzle')
const guessElement = document.querySelector('#guess')
const game1 = new Hangman('Hello', 3)

puzzleElement.textContent = game1.getPuzzle()
guessElement.textContent = game1.remainingGuesses

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)
console.log(game1.status)

//registers key presses
window.addEventListener('keypress', function (e) {
    //CharCode deprecated, grab key straight from property eg; e.key
    //console.log(e.key)
    const guess = String(e.key)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.getPuzzle()
    guessElement.textContent = game1.remainingGuesses
    console.log(game1.status)
})