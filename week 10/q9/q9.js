// 1. Define the array of integers
let numbers = [1, 2, 3, 4, 5];

// 2. Initialize sum and product variables
let sum = 0;
let product = 1;

// 3. Use a loop to calculate totals
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];      // Adds each number to the total
    product *= numbers[i];  // Multiplies each number to the total
}

// 4. Display the results
document.write("Array: [" + numbers + "]<br>");
document.write("<strong>Sum:</strong> " + sum + "<br>");
document.write("<strong>Product:</strong> " + product);
