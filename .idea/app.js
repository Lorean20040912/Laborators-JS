// task 1
const dateofbirth = 2004;
const name = "Lorean";
let studying = true;
const currentYear = new Date().getFullYear();
console.log("Year of birth is:",currentYear - dateofbirth);

// task 2
const pi= 3.14159;
let radius = 5;
console.log("raza cercului", pi*radius);

// ## Task 3: Type Conversion
// Create variables with string numbers (`"42"`, `"3.14"`). Convert them to actual numbers using `parseInt()`, `parseFloat()`, and `Number()`. Compare the results.
let string1="42";
let string2= "3.14";
let stringschimbat1=parseInt(string1);
let stringschimbat2=parseInt(string2);
console.log(stringschimbat1,typeof(stringschimbat1));
console.log(stringschimbat2,typeof(stringschimbat2));
stringschimbat1= parseFloat(string1);
stringschimbat2=parseFloat(string2);
console.log(stringschimbat1,typeof(stringschimbat1));
console.log(stringschimbat2,typeof(stringschimbat2));
stringschimbat1=Number(string1);
stringschimbat2=Number(string2);
console.log(stringschimbat1,typeof(stringschimbat1));
console.log(stringschimbat2,typeof(stringschimbat2));

// ## Task 4: Variable Naming and Scope
// Write a function that declares variables in local and global scope. Demonstrate how `let` and `const` differ from `var` regarding block scope using an `if` statement.
let globalVar = "I am global";

function demonstrateScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible

    if (true) {
        var blockVar = "I am var (function scoped)";
        let blockLet = "I am let (block scoped)";
        const blockConst = "I am const (block scoped)";
        console.log("Inside block:", blockVar, blockLet, blockConst);
    }

    console.log("Outside block (var):", blockVar); // Accessible because of function scope
    try {
        console.log("Outside block (let):", blockLet); // ReferenceError
    } catch (e) {
        console.log("Outside block (let): Not accessible");
    }
    try {
        console.log("Outside block (const):", blockConst); // ReferenceError
    } catch (e) {
        console.log("Outside block (const): Not accessible");
    }
}

demonstrateScope();


// ## Task 5: Working with Multiple Declarations
// Declare 5 variables at once using destructuring (e.g., `const [a, b, c] = [10, 20, 30]`). Swap their values and print the results.
let [a, b, c, d, e] = [1, 2, 3, 4, 5];
console.log("Înainte de swap:", a, b, c, d, e);

// Facem swap la valori (de exemplu, le rotim: a ia valoarea lui b, b pe a lui c, etc.)
[a, b, c, d, e] = [b, c, d, e, a];

console.log("După swap (rotire):", a, b, c, d, e);


