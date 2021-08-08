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
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            showOutputChange();
        } else {
            showMessage("Do you wanna wash plates?");
            hideOutputChange();
        }
    }
    else {
        showMessage("Invalid Bill Amount");
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