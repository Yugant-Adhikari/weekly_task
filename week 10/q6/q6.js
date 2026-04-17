// Variable for the number we want the table for
let num = 5;

document.write("<h2>Multiplication Table of 5</h2>");

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    
    // Displaying the result in the format: 5 x 1 = 5
    document.write(`${num} x ${i} = ${result} <br>`);
}
