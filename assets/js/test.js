import '../sass/main.scss'
import loadedQuestions from '../json/test-questions.json';
'use strict'

const questionRef = document.getElementById("question");
const answerARef = document.getElementById("answer-1");
const answerBRef = document.getElementById("answer-2");
const answerCRef = document.getElementById("answer-3");
const answerDRef = document.getElementById("answer-4");
const answerERef = document.getElementById("answer-5");

const previousQuestionRef = document.getElementById("previousQuestion");
const nextQuestionRef = document.getElementById("nextQuestion");
const endTestRef = document.getElementById("endTest");

const testQuestions = [];
let answeredQuestions = [];

let currentQuestionIndex = 0;

previousQuestionRef.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        removeActiveQuestionItem();
        currentQuestionIndex--;
        loadQuestionContentToView(testQuestions[currentQuestionIndex]);
        setActiveQuestionItem();
    }
});

nextQuestionRef.addEventListener("click", () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
        removeActiveQuestionItem();
        currentQuestionIndex++;
        loadQuestionContentToView(testQuestions[currentQuestionIndex]);
        setActiveQuestionItem();
    }
});

answerARef.addEventListener("click", () => {
    addQuestionAnswer("1");
});
answerBRef.addEventListener("click", () => {
    addQuestionAnswer("2");
});
answerCRef.addEventListener("click", () => {
    addQuestionAnswer("3");
});
answerDRef.addEventListener("click", () => {
    addQuestionAnswer("4");
});
answerERef.addEventListener("click", () => {
    addQuestionAnswer("5");
});

const questionItemClickListeners = (questionIndex) => {
    removeActiveQuestionItem();
    currentQuestionIndex = questionIndex;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
}

const initializeQuestionItemsEventListener = () => {
    for (let i = 1; i < 31; i++) {
        const questionItemRef = document.getElementById(`questionItem-${i}`);
        questionItemRef.addEventListener("click", () => {
            questionItemClickListeners(i - 1);
        });
    }
}

initializeQuestionItemsEventListener();
const drawQuestions = () => {
    while (testQuestions.length < 30) {
        const randomIndex = Math.floor(Math.random() * loadedQuestions.length);
        if (!testQuestions.includes(loadedQuestions[randomIndex])) {

            testQuestions.push(loadedQuestions[randomIndex])
            testQuestions.at(-1).testIndex = testQuestions.length;
        }
    }
    answeredQuestions = [...testQuestions];
}
drawQuestions();
const setActiveQuestionItem = () => {
    const questionItems = document.getElementById(`questionItem-${currentQuestionIndex + 1}`);
    questionItems.classList.add("app__questionItem--active");
    if (currentQuestionIndex === 29) {
        displayButtonEnd();
    }
}

const removeActiveQuestionItem = () => {
    const questionItems = document.getElementById(`questionItem-${currentQuestionIndex + 1}`);
    questionItems.classList.remove("app__questionItem--active");
    if (currentQuestionIndex === 29) {
        hiddenButtonEnd();
    }
}

const setAnsweredQuestionItem = () => {
    const questionItems = document.getElementById(`questionItem-${currentQuestionIndex + 1}`);
    questionItems.classList.add("app__questionItem--answered");
}

const unselectAllAnswers = () => {
    for (let i = 1; i <= 5; i++) {
        const answer = document.getElementById(`answer-${i}`);
        answer.classList.remove("app__answer--selected");
    }
}
const selectAnswer = (index) => {
    const questionItems = document.getElementById(`answer-${index}`);
    questionItems.classList.add("app__answer--selected");
}
const loadQuestionContentToView = (question) => {
    unselectAllAnswers();
    questionRef.innerHTML = question.question.replace(/\n/g, "<br>");
    answerARef.textContent = question.answerA;
    answerBRef.textContent = question.answerB;
    answerCRef.textContent = question.answerC;
    answerDRef.textContent = question.answerD;
    answerERef.textContent = question.answerE;
    setActiveQuestionItem();
    if (question.answer !== undefined) {
        selectAnswer(question.answer);
    }
}

loadQuestionContentToView(testQuestions[0]);

const addQuestionAnswer = (answer) => {
    unselectAllAnswers();
    answeredQuestions[currentQuestionIndex].answer = answer;
    setAnsweredQuestionItem();
    selectAnswer(answer);
}
const displayButtonEnd = () => {
    nextQuestionRef.classList.add("hidden");
    endTestRef.classList.remove("hidden");
}
const hiddenButtonEnd = () => {
    nextQuestionRef.classList.remove("hidden");
    endTestRef.classList.add("hidden");
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = () => {
    const thirtyMinutes = 30 * 60;
    const display = document.getElementById("timer");
    startTimer(thirtyMinutes, display);
};
