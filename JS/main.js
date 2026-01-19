import { questions } from "./data/questions.js";
import { events } from "./data/events.js";

import { state } from "./game/state.js";
import { checkAnswer, nextQuestion, canRebuildCity } from "./game/logic.js";

import {
    renderQuestion,
    renderAnswers,
    renderMaterials,
    renderEndScreen
} from "./ui/render.js";

import { disableAnswers } from "./ui/buttons.js";

function loadQuestion() {
    const q = questions[state.currentQuestion];

    renderQuestion(q.text);
    renderAnswers(q.answers, handleAnswer);
}

function handleAnswer(index) {
    const q = questions[state.currentQuestion];

    checkAnswer(q, index);
    renderMaterials(state.materials);
    disableAnswers();

    setTimeout(() => {
        nextQuestion(questions.length);

        if (state.finished) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 600);
}

function endGame() {
    if (canRebuildCity()) {
        renderEndScreen(events.win.message);
    } else {
        renderEndScreen(events.lose.message);
    }
}

loadQuestion();
