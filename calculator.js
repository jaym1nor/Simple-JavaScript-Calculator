// Table to display inputs and results
let htmlTable = "<table border='1'>";
htmlTable += "<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>";

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
    }
    // Add results to table
    htmlTable += `<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`;

    x = prompt("Enter the first number: ");
}
// Close the table
htmlTable += "</table>";
document.write(htmlTable);
