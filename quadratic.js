function solveQuadratic(a, b, c) {
    let d = b * b - 4 * a * c;

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        console.log("Real and Different Roots");
        console.log("x1 =", x1);
        console.log("x2 =", x2);

    } else if (d === 0) {
        let x = -b / (2 * a);

        console.log("Real and Equal Roots");
        console.log("x =", x);

    } else {
        let real = (-b / (2 * a)).toFixed(2);
        let imaginary = (Math.sqrt(-d) / (2 * a)).toFixed(2);

        console.log("Imaginary Roots");
        console.log(`x1 = ${real} + ${imaginary}i`);
        console.log(`x2 = ${real} - ${imaginary}i`);
    }
}

module.exports = solveQuadratic;