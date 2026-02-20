// Table to display inputs and results
let resultTable = "<table border='1'>";
resultTable += "<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>"; // X, Operator, Y, Result Headers

let validResults = [];

// User Input Handling
let x = prompt("Enter the first number: ");

while (x !== null) {
    let operator = prompt("Enter the operator (+, -, %, /, *): ");
    let y = prompt("Enter the second number: ");

    let result;

    // Prompt returns a string, so check if the input is a number
    if (isNaN(x) || isNaN(y)) {
        result = "Invalid input! Enter a valid number.";
    } else if (operator !== "+" && operator !== "-" && operator !== "%" && operator !== "/" && operator !== "*") {
        result = "Invalid operator! Enter one of +, -, %, /, *.";
    } else {
        x = Number(x);
        y = Number(y);

        // Compute result
        if (operator === "+") result = x + y;
        else if (operator === "-") result = x - y;
        else if (operator === "%") result = x % y;
        else if (operator === "/") result = x / y;
        else if (operator === "*") result = x * y;

        // Store valid results
        if (typeof result === "number" && isFinite(result)) {
            validResults.push(result);
        }
    }
    // Add results to table
    resultTable += `<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`;

    x = prompt("Enter the first number: ");
}
// Close the input table
resultTable += "</table>";
document.write(resultTable);

// Calculate and display summary statistics
let min = Math.min(...validResults);
let max = Math.max(...validResults);
let avg = validResults.reduce((a, b) => a + b, 0) / validResults.length;
let total = validResults.reduce((a, b) => a + b, 0);

let summaryTable = "<table border='1'>";
summaryTable += "<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>"; // Min, Max, Average, Total Headers
summaryTable += `<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`;
summaryTable += "</table>";
document.write(summaryTable);