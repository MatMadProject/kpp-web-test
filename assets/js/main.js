import '../sass/main.scss'
import loadedQuestions from '../json/test-questions.json';
'use strict'

console.log(loadedQuestions);
const questionRef = document.getElementById("question");
const answerARef = document.getElementById("answer-a");
const answerBRef = document.getElementById("answer-b");
const answerCRef = document.getElementById("answer-c");
const answerDRef = document.getElementById("answer-d");
const answerERef = document.getElementById("answer-e");


async function loadQuestions() {
    try {
        const response = await fetch('assets/json/test-questions.json');
        console.log(response);
        loadedQuestions = await response.json();
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

const loadQuestionContentToView = (question) => {
    console.log(question);
    questionRef.textContent = question.question;
    answerARef.textContent = question.answerA;
    answerBRef.textContent = question.answerB;
    answerCRef.textContent = question.answerC;
    answerDRef.textContent = question.answerD;
    answerERef.textContent = question.answerE;
}

loadQuestionContentToView(loadedQuestions[0]);

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0; // Timer stop at 0
        }
    }, 1000);
}

window.onload = () => {
    const thirtyMinutes = 30 * 60;
    const display = document.getElementById("timer");
    startTimer(thirtyMinutes, display);
};
