import '../sass/main.scss'
import loadedQuestions from '../json/test-questions.json';
import { LOCAL_STORAGE_PREFIX, ALLQUESTION_LOCAL_STORAGE_SUFIX } from './variables.js';
'use strict'

const questionRef = document.getElementById("question");
const answerARef = document.getElementById("answer-1");
const answerBRef = document.getElementById("answer-2");
const answerCRef = document.getElementById("answer-3");
const answerDRef = document.getElementById("answer-4");
const answerERef = document.getElementById("answer-5");
const questionNumberRef = document.getElementById("questionNumber");


const previousQuestionRef = document.getElementById("previousQuestion");
const nextQuestionRef = document.getElementById("nextQuestion");

let currentQuestionIndex = 0;
const saveData = () => {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}-currentQuestionIndex-${ALLQUESTION_LOCAL_STORAGE_SUFIX}`, currentQuestionIndex);
}

const LoadData = () => {
    currentQuestionIndex = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}-currentQuestionIndex-${ALLQUESTION_LOCAL_STORAGE_SUFIX}`);
    if (currentQuestionIndex == null) {
        currentQuestionIndex = 0;
    }
}
LoadData();

previousQuestionRef.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
    } else {
        currentQuestionIndex = 249;
    }
    loadQuestionContentToView(loadedQuestions[currentQuestionIndex]);
});

nextQuestionRef.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex == 250) {
        currentQuestionIndex = 0;
    }
    loadQuestionContentToView(loadedQuestions[currentQuestionIndex]);

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

const unselectAllAnswers = () => {
    for (let i = 1; i <= 5; i++) {
        const answer = document.getElementById(`answer-${i}`);
        answer.classList.remove("app__answer--selected", "animationCorrectAnswer");
        void answer.offsetWidth;
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
    questionNumberRef.textContent = `Pytanie ${currentQuestionIndex + 1} z ${loadedQuestions.length}`
    saveData();
}

loadQuestionContentToView(loadedQuestions[currentQuestionIndex]);

const addQuestionAnswer = (answer) => {
    unselectAllAnswers();
    selectAnswer(answer);
    startAnimationCorrectAnswer();
}

const startAnimationCorrectAnswer = () => {
    const answerRef = document.getElementById(`answer-${loadedQuestions[currentQuestionIndex].correctAnswer}`);
    answerRef.classList.add("animationCorrectAnswer");
}

function startTimer(display) {
    let timer = 0;
    setInterval(() => {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        timer++;
    }, 1000);
}

window.onload = () => {
    const display = document.getElementById("timer");
    startTimer(display);
};

