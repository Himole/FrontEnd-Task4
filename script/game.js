const scoreDisplay = document.querySelector('.score');
const question = document.querySelector('.question');
const iqAnswers = document.querySelectorAll(".answer");
const nextBtn = document.querySelector(".next");
const popUp = document.querySelector(".pop-up");

let latestQuestion = {};
let score = 0;
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
        question : "How many states are in united states?",
        answers1 : 50,
        answers2 : 30,
        answers3 : 10,
        answers4 : 90,
        answer : 1
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
    answer.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        nextBtn.style.display = "block";

        let classToApply = 'incorrect';

        console.log(selectedAnswer, iqQuestions[0].answer);

        if( selectedAnswer == iqQuestions[0].answer ) {
             classToApply = 'correct';
        }

        addCorrect = (data) => {
            data.classList.add('correct');
        }

        selectedChoice.classList.add(classToApply);

        if ( e.target.dataset['number'] == iqQuestions[0].answer ) {
            e.target.classList.add('correct');
        }

        answer.parentElement.style.pointerEvents = "none";

        if ( classToApply === 'correct' ) {
            addScore(scoreMark);
        }

        iqQuestions.shift();

        nextBtn.addEventListener("click", () => {
            if( iqQuestions.length === 0 ) {
                return window.location.assign("/end.html");
            }
            getNewQuestion();
            answer.parentElement.style.pointerEvents = "all";
            selectedChoice.classList.remove(classToApply);
            nextBtn.style.display = "none";
        })
    });

    addScore = num => {
        score += num;
        scoreDisplay.innerText = score;
    }
});

iqTest();

