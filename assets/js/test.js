import '../sass/main.scss'
import loadedQuestions from '../json/test-questions.json';
'use strict'

const questionRef = document.getElementById("question");
const answerARef = document.getElementById("answer-1");
const answerBRef = document.getElementById("answer-2");
const answerCRef = document.getElementById("answer-3");
const answerDRef = document.getElementById("answer-4");
const answerERef = document.getElementById("answer-5");
const questionItem1Ref = document.getElementById("questionItem-1");
const questionItem2Ref = document.getElementById("questionItem-2");
const questionItem3Ref = document.getElementById("questionItem-3");
const questionItem4Ref = document.getElementById("questionItem-4");
const questionItem5Ref = document.getElementById("questionItem-5");
const questionItem6Ref = document.getElementById("questionItem-6");
const questionItem7Ref = document.getElementById("questionItem-7");
const questionItem8Ref = document.getElementById("questionItem-8");
const questionItem9Ref = document.getElementById("questionItem-9");
const questionItem10Ref = document.getElementById("questionItem-10");
const questionItem11Ref = document.getElementById("questionItem-11");
const questionItem12Ref = document.getElementById("questionItem-12");
const questionItem13Ref = document.getElementById("questionItem-13");
const questionItem14Ref = document.getElementById("questionItem-14");
const questionItem15Ref = document.getElementById("questionItem-15");
const questionItem16Ref = document.getElementById("questionItem-16");
const questionItem17Ref = document.getElementById("questionItem-17");
const questionItem18Ref = document.getElementById("questionItem-18");
const questionItem19Ref = document.getElementById("questionItem-19");
const questionItem20Ref = document.getElementById("questionItem-20");
const questionItem21Ref = document.getElementById("questionItem-21");
const questionItem22Ref = document.getElementById("questionItem-22");
const questionItem23Ref = document.getElementById("questionItem-23");
const questionItem24Ref = document.getElementById("questionItem-24");
const questionItem25Ref = document.getElementById("questionItem-25");
const questionItem26Ref = document.getElementById("questionItem-26");
const questionItem27Ref = document.getElementById("questionItem-27");
const questionItem28Ref = document.getElementById("questionItem-28");
const questionItem29Ref = document.getElementById("questionItem-29");
const questionItem30Ref = document.getElementById("questionItem-30");
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
questionItem1Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 0;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem2Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 1;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem3Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 2;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem4Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 3;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem5Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 4;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem6Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 5;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem7Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 6;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem8Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 7;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem9Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 8;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem10Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 9;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem11Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 10;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem12Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 11;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem13Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 12;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem14Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 13;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem15Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 14;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem16Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 15;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem17Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 16;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem18Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 17;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem19Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 18;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem20Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 19;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem21Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 20;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem22Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 21;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem23Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 22;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem24Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 23;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem25Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 24;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem26Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 25;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem27Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 26;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem28Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 27;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem29Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 28;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});
questionItem30Ref.addEventListener("click", () => {
    removeActiveQuestionItem();
    currentQuestionIndex = 29;
    loadQuestionContentToView(testQuestions[currentQuestionIndex]);
    setActiveQuestionItem();
});




const drawQuestion = () => {
    while (testQuestions.length < 30) {
        const randomIndex = Math.floor(Math.random() * loadedQuestions.length);
        if (!testQuestions.includes(loadedQuestions[randomIndex])) {

            testQuestions.push(loadedQuestions[randomIndex])
            testQuestions.at(-1).testIndex = testQuestions.length;
        }
    }
    answeredQuestions = [...testQuestions];
}
drawQuestion();
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
    answerARef.classList.remove("app__answer--selected");
    answerBRef.classList.remove("app__answer--selected");
    answerCRef.classList.remove("app__answer--selected");
    answerDRef.classList.remove("app__answer--selected");
    answerERef.classList.remove("app__answer--selected");
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
