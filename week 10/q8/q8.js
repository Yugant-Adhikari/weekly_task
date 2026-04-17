// 1. Define the sample array
let myColor = ["Red", "Green", "White", "Black"];

// 2. Using toString() - returns a comma-separated string
let output1 = myColor.toString();

// 3. Using join() - defaults to a comma-separated string
let output2 = myColor.join();

// 4. Using join('+') - uses '+' as the separator
let output3 = myColor.join('+');

// Displaying results on the page
document.write(`"${output1}" <br>`);
document.write(`"${output2}" <br>`);
document.write(`"${output3}"`);
