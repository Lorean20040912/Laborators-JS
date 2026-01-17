// Conditional Constructions in JavaScript - Exercises

// Task 1: Simple If Statement
// Write a program that checks if a number is positive and logs "Positive" or "Not positive".
// Rezolvare:
let number = 10;
if (number > 0) {
    console.log("Positive");
} else {
    console.log("Not positive");
}


// Task 2: If-Else Statement
// Create a function that determines if a person is an adult (age >= 18) and returns the appropriate message.
// Rezolvare:
let age=27;
if (age>=18) {
    console.log("este adult");
} else {
    console.log("este minor");
}


// Task 3: Nested If Statements
// Write code that checks a grade and logs: "Excellent" (A), "Good" (B), "Average" (C), or "Needs Improvement" (D/F).
// Rezolvare:
let grade = 'B';
if (grade === 'A') {
    console.log("Excellent");
} else if (grade === 'B') {
    console.log("Good");
} else if (grade === 'C') {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}


// Task 4: Switch Statement
// Implement a function that takes a day number (1-7) and returns the day name using a switch statement.
// Rezolvare:
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}
console.log(getDayName(3));


// Task 5: Ternary Operator
// Use a ternary operator to assign "even" or "odd" to a variable based on a number's remainder.
// Rezolvare:
let num = 7;
let type = (num % 2 === 0) ? "even" : "odd";
console.log(type);


// Task 6: Logical AND Operator
// Write a condition that checks if both age > 18 AND hasLicense is true before allowing driving.
// Rezolvare:
let userAge = 20;
let hasLicense = true;
if (userAge > 18 && hasLicense) {
    console.log("Allowed to drive");
} else {
    console.log("Not allowed to drive");
}


// Task 7: Logical OR Operator
// Create a function that grants access if the user is either an admin OR the owner of the resource.
// Rezolvare:
function checkAccess(isAdmin, isOwner) {
    if (isAdmin || isOwner) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}
checkAccess(false, true);


// Task 8: Multiple Conditions
// Check if a password is valid: length >= 8, contains uppercase, contains a number, and contains a special character.
// Rezolvare:
let password = "Password1!";
let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

if (password.length >= 8 && hasUppercase && hasNumber && hasSpecialChar) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}


// Task 9: Switch with Fall-through
// Implement a function that groups months by season using a switch statement with intentional fall-through cases.
// Rezolvare:
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            return "Invalid month";
    }
}
console.log(getSeason(4));


// Task 10: Complex Conditional Logic
// Write a discount calculator that applies different percentages based on purchase amount AND customer type (regular/premium/vip).
// Rezolvare:
function calculateDiscount(amount, customerType) {
    let discount = 0;
    if (customerType === 'vip') {
        discount = 0.3;
    } else if (customerType === 'premium') {
        discount = (amount > 100) ? 0.2 : 0.1;
    } else if (customerType === 'regular') {
        discount = (amount > 200) ? 0.1 : 0.05;
    }
    return amount * discount;
}
console.log("Discount:", calculateDiscount(250, 'premium'));
