const scoreDisplay = document.querySelector('.score');
const question = document.querySelector('.question');
const iqAnswers = document.querySelectorAll(".answer");
const nextBtn = document.querySelector(".next");
const popUp = document.querySelector(".pop-up");
const popClose = document.querySelector(".continue");
const popName = document.querySelector(".pop-text");
username = localStorage.getItem('username');

popName.innerText = `${username}, you dull o!`;

let latestQuestion = {};
let score = 0;
let wrong = 0;
let popUpScore = 0;
let scoreMark = 1;
let questionsToBeAnswered = [];
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
    questionsToBeAnswered = [...iqQuestions];
    getNewQuestion();
}

getNewQuestion = () => {
    let quest = iqQuestions[0].question;
    let latestQuestion = iqQuestions[0];

    question.innerText = quest;

    iqAnswers.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = latestQuestion['answers' + number];
    });
};

iqAnswers.forEach ( answer => {

    // addColor = () => {
    //     console.log( answer.dataset['number'] )
    //     //  if ( answer.dataset['number'] === iqQuestions[0].answer ) {
    //     //     console.log("yes")
    //     // }
    // }

    answer.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        nextBtn.style.display = "block";

        let classToApply = 'incorrect';

        if( selectedAnswer == iqQuestions[0].answer ) {
             classToApply = 'correct';
        }

        addCorrect = (data) => {
            data.classList.add('correct');
        }

        selectedChoice.classList.add(classToApply);

        if ( e.target.dataset['number'] == iqQuestions[0].answer ) {
            e.target.classList.add('correct');
            popUpScore++;
        }

        answer.parentElement.style.pointerEvents = "none";

        if ( classToApply === 'correct' ) {
            addScore(scoreMark);
        }

        // addColor();

        iqQuestions.shift();

        if( iqQuestions.length === 0 )  {
            localStorage.setItem("recentScore", score);
        }

        nextBtn.addEventListener("click", () => {
            if( iqQuestions.length === 3 ) {
                if ( popUpScore < 2 ){
                    popUp.style.display = "block";
                }
            }
            
            if( iqQuestions.length === 0 ) {
                return  window.location.href = "endgame.html";
            }
            getNewQuestion();
            answer.parentElement.style.pointerEvents = "all";
            selectedChoice.classList.remove(classToApply);
            nextBtn.style.display = "none";
        })

        if ( classToApply !== 'correct' ) {
            wrong++
        }
        localStorage.setItem("wrongScore", wrong);
    });

    if( iqQuestions.length === 0 )  {
        localStorage.setItem("recentScore", score);
    }


    addScore = num => {
        score += num;
        scoreDisplay.innerText = score;
    }
});

popClose.addEventListener('click', () => {
    popUp.style.display = "none";
})

iqTest();

