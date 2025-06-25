// Violation of security/detect-eval-with-expression
const userInput = "2 + 2";
eval("console.log(" + userInput + ")");