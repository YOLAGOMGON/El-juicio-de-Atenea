import { state } from "./state.js";
import { reward, cityCost } from "./resources.js";

export function checkAnswer(question, index) {
    if (question.correct === index) {
        applyReward();
        return true;
    }
    return false;
}

function applyReward() {
    Object.keys(reward).forEach(key => {
        state.materials[key] += reward[key];
    });
}

export function nextQuestion(total) {
    state.currentQuestion++;
    if (state.currentQuestion >= total) {
        state.finished = true;
    }
}

export function canRebuildCity() {
    return Object.keys(cityCost).every(key =>
        state.materials[key] >= cityCost[key]
    );
}
