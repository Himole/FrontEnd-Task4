score = localStorage.getItem('recentScore');
wrong = localStorage.getItem('wrongScore');
const scoreText = document.querySelector('.score h2');
const correctText = document.querySelector('.correct');
const wrongText = document.querySelector('.wrong');
const congratText = document.querySelector('.congrats');

// if ( score === 1 ){
//     congratText.innerHTML = `Go back to school`
// }
scoreText.innerText = score;
correctText.innerText = `${score} Correct Answers`;
wrongText.innerText = `${wrong} Wrong Answers`;

