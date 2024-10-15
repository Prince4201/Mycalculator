// Appends the clicked button value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clears the entire display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Deletes the last character from the display
function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Evaluates the result of the expression
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}