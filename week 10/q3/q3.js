// 1. Input: Ask the user for their marks
let marks = prompt("Enter your marks:");

// Convert the input string to a number
marks = Number(marks);

// 2. Logic: Check the conditions using if...else if...else
if (marks >= 80 && marks <= 100) {
    alert("Distinction");
} 
else if (marks >= 60 && marks < 80) {
    alert("First Division");
} 
else if (marks >= 50 && marks < 60) {
    alert("Second Division");
} 
else if (marks >= 40 && marks < 50) {
    alert("Third Division");
} 
else if (marks < 40 && marks >= 0) {
    alert("Fail");
} 
else {
    alert("Invalid Input! Please enter marks between 0 and 100.");
}
