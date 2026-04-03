// --- #1 ---
while (coffee.brewing) {
    startConversation();
    // warning: may result in accidental collaboration
}

// --- #2 ---
const coffeeBreak = {
    scheduled: "10 minutes",
    actual: "45 minutes",
    outcome: "solved 3 problems we didn't know we had",
    regrets: 0
};

// --- #3 ---
// Best architecture decisions made:
// [ ] in the meeting room
// [ ] in the PR review
// [x] at the coffee bar, on a napkin

// --- #4 ---
function refuel(developer) {
    developer.energy = coffee.level;
    developer.socialBattery += conversation.length;
    return developer.readyToShip();
}

// --- #5 ---
const coffeeBar = {
    purpose: "caffeine delivery",
    actualPurpose: "where the real talks happen",
    byproduct: "ideas that become features"
};

// --- #6 ---
if (bug.isUnsolvable()) {
    getCoffee();
    talkToAHuman();
    return solution; // it was obvious the whole time
}

// --- #7 ---
while (!inspired) {
    drink(coffee);
    talk(stranger);
    // note: stranger.becomesColleague() is a known side effect
}

// --- #8 ---
const roast = {
    subject: colleague.who_pushed_broken_build,
    temperature: "medium-high",
    duration: "until they understand what they did",
    grind: "coarse enough to be funny"
};

// --- #9 ---
function roast(target) {
    if (target === "the beans") {
        return coffee.flavor++;
    }
    if (target === "your PR") {
        return codeReview.comments.length * 10;
    }
    // both leave you a little burned
}

// --- #10 ---
// Types of roast:
// Light  — "have you considered writing a test?"
// Medium — "this works, but at what cost"
// Dark   — reading someone's commit history out loud
