const getInput = require("./input");
const solveQuadratic = require("./quadratic");

console.log("Quadratic Equation Solver");
console.log("Equation: ax² + bx + c = 0\n");

getInput((a, b, c) => {
    solveQuadratic(a, b, c);
});