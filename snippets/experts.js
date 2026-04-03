// --- #1 ---
function askTheExpert(question) {
    const answer = expert.knows(question);
    const insight = answer + context.youDidntKnowYouNeeded();
    return insight; // worth it every time
}

// --- #2 ---
const impostor = {
    feelsTooJuniorToAsk: true,
    actuallyKnowsALot: also_true,
    shouldAskAnyway: absolutely
};

// --- #3 ---
// Step 1: Ask AI
// Step 2: Ask AI again, differently
// Step 3: Ask AI to explain why its first answer was wrong
// Step 4: Ask the expert
// Step 5: realize you should have done step 4 first

// --- #4 ---
if (question.feelsTooBasic()) {
    ask(); // someone in this room has wondered the same thing
}
if (question.feelsTooAdvanced()) {
    ask(); // that's literally what they're here for
}

// --- #5 ---
const expert = {
    title: "many years of battle scars",
    superpower: "makes complex things simple",
    favorite_question: "that's a great one, actually"
};

// --- #6 ---
try {
    figureItOutAlone();
} catch (hours_wasted) {
    askTheExpert(); // 10 minutes later: solved
}

// --- #7 ---
SELECT answer, context, "things you didn't know to ask"
FROM expert
WHERE question = yours
AND ego = false;
