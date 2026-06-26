const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(callback) {
    rl.question("Enter value of a: ", (a) => {
        rl.question("Enter value of b: ", (b) => {
            rl.question("Enter value of c: ", (c) => {
                callback(Number(a), Number(b), Number(c));
                rl.close();
            });
        });
    });
}

module.exports = getInput;