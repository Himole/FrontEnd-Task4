username = localStorage.getItem('username');
score = localStorage.getItem('recentScore');
wrong = localStorage.getItem('wrongScore');
const scoreText = document.querySelector('.score h2');
const correctText = document.querySelector('.correct');
const wrongText = document.querySelector('.wrong');
const congratText = document.querySelector('.congrats');

if ( score <= 2 ){
    congratText.innerHTML = `Go back to school ${username}`
} else if ( score <= 3 ) {
    congratText.innerHTML = `Go and collect your school fees back ${username}`
} else if ( score <= 4 ) {
    congratText.innerHTML = `Good Job!! ${username}`
} else {
    congratText.innerHTML = `Yo ${username}, you got it all just like a Boss!`
}


scoreText.innerText = score;
correctText.innerText = `${score} Correct Answers`;
wrongText.innerText = `${wrong} Wrong Answers`;