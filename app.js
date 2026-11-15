const countDisplay = document.getElementById("count");
const lastUpdatedDisplay = document.getElementById("lastUpdated");
const bestDisplay = document.getElementById("best");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

let counter = {
    count: 0,
    lastUpdated: null,
    best: 0
};

const savedCounter = localStorage.getItem("counter");

if (savedCounter) {
    counter = JSON.parse(savedCounter);
}

function updateDisplay() {

    countDisplay.textContent = counter.count;

    if (counter.lastUpdated === null) {
        lastUpdatedDisplay.textContent = "Last updated: Never";
    } else {
        lastUpdatedDisplay.textContent = "Last updated: " + counter.lastUpdated;
    }

    bestDisplay.textContent = "Best: " + counter.best;
}

function saveCounter() {

    localStorage.setItem("counter", JSON.stringify(counter));

    updateDisplay();
}

plusButton.addEventListener("click", function() {

    counter.count = counter.count + 1;

    counter.lastUpdated = new Date().toLocaleString();

    if (counter.count > counter.best) {
        counter.best = counter.count;
    }

    saveCounter();

});

minusButton.addEventListener("click", function() {

    if (counter.count > 0) {

        counter.count = counter.count - 1;

        counter.lastUpdated = new Date().toLocaleString();

        saveCounter();

    }

});

resetButton.addEventListener("click", function() {

    counter.count = 0;

    counter.lastUpdated = new Date().toLocaleString();

    saveCounter();

});

updateDisplay();