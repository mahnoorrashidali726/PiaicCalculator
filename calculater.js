import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Please enter your first no:"
    },
    {
        type: "number",
        name: "num2",
        message: "Please enter your second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["-", "+", "*", "/"],
        message: "Please select your operator:"
    }]);
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator == "-") {
        result = num1 - num2;
    }
    else if (operator == "+") {
        result = num1 + num2;
    }
    else if (operator == "/") {
        result = num1 / num2;
    }
    else if (operator == "*") {
        result = num1 * num2;
    }
    console.log(`Your result is:`, result);
}
else {
    console.log("Please enter vilad input.");
}
