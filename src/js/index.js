const billAmount = document.querySelector(".bill-amt #bill-amount");
const cashGiven = document.querySelector(".cash-input #cash-given");
const cashGivenDiv = document.querySelector(".cash-input");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next");
const outputChange = document.querySelector(".output-change");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function goToNextSection() {
    hideMessage();
    if(billAmount.value === "") {
        showMessage("Enter valid Bill Amount");
    }
    else {
        showCashGivenAndCheckButton();
        hideNextButton();
    }
})

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(Number(billAmount.value) > 0 && Number(cashGiven.value) > 0) {
        if(Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
            showOutputChange();
        } else {
            showMessage("Insufficient Amount!! Please give " + (Number(billAmount.value) - Number(cashGiven.value)) + "Rs more!");
            hideOutputChange();
        }
    }
    else {
        showMessage("Invalid Bill Amount or Cash Given Amount");
        hideOutputChange();
    }
})

function hideNextButton() {
    nextButton.style.display = "none";
}

function showCashGivenAndCheckButton() {
    cashGivenDiv.style.display = "block";
    checkButton.style.display = "block";
}

function showOutputChange() {
    outputChange.style.display = "block";
}

function hideOutputChange() {
    outputChange.style.display = "none";
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amount) {
    for(let i = 0; i<availableNotes.length; i++) {
        const noOfNotes = Math.trunc(amount / availableNotes[i]);
        amount = amount % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
}