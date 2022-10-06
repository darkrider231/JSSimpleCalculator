// Link: https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/
function clearScreen() {
    document.getElementById("results").value = "";
    console.log("You have cleared the screen");
}

function display(value) {
    document.getElementById("results").value += value;
}

function calculate() {
    var p = document.getElementById("results").value;
    // The JavaScript eval() function evaluates an expression that you pass to it. It returns the result of that expression.
    var q = eval(p);
    document.getElementById("results").value = q;
}