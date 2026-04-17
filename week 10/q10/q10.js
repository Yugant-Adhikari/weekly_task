// 1. Define the function with parameters
function calculateArea(length, breadth) {
    let area = length * breadth;
    return area;
}

// 2. Call the function with sample values
let lengthValue = 10;
let breadthValue = 5;
let result = calculateArea(lengthValue, breadthValue);

// 3. Display the output
document.write(`Length: ${lengthValue} <br>`);
document.write(`Breadth: ${breadthValue} <br>`);
document.write(`<strong>Total Area:</strong> ${result}`);
