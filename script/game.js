const scoreDisplay = document.querySelector('.score');
const question = document.querySelector('.question');
const iqAnswers = document.querySelectorAll(".answer");
const nextBtn = document.querySelector(".next");
const popUp = document.querySelector(".pop-up");
const popClose = document.querySelector(".continue");
const popName = document.querySelector(".pop-text");
const loader = document.querySelector(".loader");
const game = document.querySelector(".game");
username = localStorage.getItem('username');

popName.innerText = `${username}, you dull o!`;

let latestQuestion = {};
let score = 0;
let wrong = 0;
let popUpScore = 0;
let scoreMark = 1;
let iqQuestions = [
    {
        question : "The day after the day after tomorrow is four days before Monday. What day is it today?",
        answers1 : "Monday",
        answers2 : "Tuesday",
        answers3 : "Wednesday",
        answers4 : "Thursday",
        answer : 1
    },
    {
        question : "How many legs does an insect have?",
        answers1 : 19,
        answers2 : 3,
        answers3 : 6,
        answers4 : 1,
        answer : 3
    },
    {
        question : "Who is JEFF?",
        answers1 : "A Person",
        answers2 : "A Boy",
        answers3 : "A Mentor",
        answers4 : "Can be anything",
        answer : 4
    },
    {
        question : "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",
        answers1 : 132,
        answers2 : 100,
        answers3 : 144,
        answers4 : 145,
        answer : 1
    },
    {
        question : "6121135 is to flame as 21215120 is to ?",
        answers1 : "Plant",
        answers2 : "Voice",
        answers3 : "Bloat",
        answers4 : "Castle",
        answer : 3
    }
];


iqTest = () => {
    score = 0;
    getNewQuestion();
    game.style.display = "block"
    loader.style.display = "none"
}

// Generates new questions.
getNewQuestion = () => {
    let quest = iqQuestions[0].question;
    let latestQuestion = iqQuestions[0];

    question.innerText = quest;

    // Loops through the DOM element to insert the questions and answers.
    iqAnswers.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = latestQuestion['answers' + number];
    });
};

iqAnswers.forEach ( answer => {

    answer.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        nextBtn.style.display = "block";

        let classToApply = 'incorrect';

        // If user selects the right answer add a classList of "CORRECT".
        selectedAnswer == iqQuestions[0].answer ? (
            classToApply = 'correct',
            addScore(scoreMark)
        ) : (
            // If user selects the wrong option add a classList of "INCORRECT"
            selectedChoice.classList.add(classToApply),
            popUpScore++
        )


        iqAnswers.forEach( option => {
            if ( option.dataset['number'] == iqQuestions[0].answer ) option.classList.add('correct');
        })

        answer.parentElement.style.pointerEvents = "none";

        // Removes the questions from the array.
        iqQuestions.shift();

        nextBtn.addEventListener("click", () => {
            // If "iqQuestions" length equals zero store the score to the local storage.
            if( iqQuestions.length === 0 ) localStorage.setItem("recentScore", score);

            // If "popUpScore" less than 1, pop up the popUp dialog
            if( iqQuestions.length === 3 ) {
                if ( popUpScore > 1 ) popUp.style.display = "block";
            }

            if( iqQuestions.length === 1 ) nextBtn.innerText = "Check your result";

            // If question array length equals zero, take me to the end game screen.
            if( iqQuestions.length === 0 ) {
                return  window.location.href = "endgame.html";
                nextBtn.innerText = "Check your result";
            }

            // Removes the classList "CORRECT".
            iqAnswers.forEach( option => {
                option.classList.remove('correct');
            })

            // Calls the function getNewQuestion
            getNewQuestion();

            answer.parentElement.style.pointerEvents = "all";
            selectedChoice.classList.remove(classToApply);
            nextBtn.style.display = "none";

        })

        // If classList is "INCORRECT" increment wrong by 1.
        if ( classToApply !== 'correct' ) wrong++;

        // Stores the wrong score in the localstorage.
        localStorage.setItem("wrongScore", wrong);

        // Stores the score in the localstorage.
        if( iqQuestions.length === 0 )  localStorage.setItem("recentScore", score);
    });

    // Creates a function that updates the user score
    addScore = num => {
        score += num;
        scoreDisplay.innerText = score;
    }
});

popClose.addEventListener('click', () => {
    popUp.style.display = "none";
})

iqTest();

