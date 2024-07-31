const random = parseInt(Math.random()*100 + 1);
const form = document.querySelector("form");
const result = document.querySelector(".loworHi");
let all_user_guesses = [];
let attempts_left = 10;

form.addEventListener('submit',function(e){
    e.preventDefault();
    let user_guess = parseInt(document.querySelector("#guessField").value);
    let chances = document.querySelector(".lastResult")
    let previous_guesses = document.querySelector(".guesses");
    
    if ( user_guess == "" || isNaN(user_guess) || user_guess < 1 || user_guess > 100) {
        result.innerHTML = `Invalid input ${user_guess}`;
        return;
    }

    if (attempts_left > 0) {
        attempts_left--;

        if (user_guess > random) {
            result.innerHTML = `Guess lower.`;
            chances.innerHTML = `${attempts_left}`
            all_user_guesses.push(user_guess);
            previous_guesses.innerHTML = all_user_guesses;

        } else if (user_guess < random) {
            result.innerHTML = `Guess higher.`;
            chances.innerHTML = `${attempts_left}`
            all_user_guesses.push(user_guess);
            previous_guesses.innerHTML = all_user_guesses;
        } else {
            result.innerHTML = `You Won! The number was ${random}.`;
            return; // exit the function
        }

        if (attempts_left === 0) {
            result.innerHTML = `Game Over! You've used all attempts. The number was ${random}.`;
        }
    }

    


})