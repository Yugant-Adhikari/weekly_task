// 1. Input: Get the number from the user
let dayNumber = prompt("Enter a number (1-7) to get the Day:");

// Convert the string input to an integer
dayNumber = parseInt(dayNumber);

// 2. Logic: Use switch case to match the number to a day
switch (dayNumber) {
    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    case 3:
        alert("Tuesday");
        break;
    case 4:
        alert("Wednesday");
        break;
    case 5:
        alert("Thursday");
        break;
    case 6:
        alert("Friday");
        break;
    case 7:
        alert("Saturday");
        break;
    default:
        alert("Invalid! Please enter a number between 1 and 7.");
}
