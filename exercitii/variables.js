// Task 1: Variables and Constants
const dateofbirth = 2004;
const name = "Lorean";
let studying = true;
const currentYear = new Date().getFullYear();
console.log("Year of birth is:", currentYear - dateofbirth);

// Task 2: Basic Math
const pi = 3.14159;
let radius = 5;
console.log("raza cercului", pi * radius);

// Task 3: Type Conversion
let string1 = "42";
let string2 = "3.14";
let stringschimbat1 = parseInt(string1);
let stringschimbat2 = parseInt(string2);
console.log("parseInt:", stringschimbat1, typeof(stringschimbat1));
console.log("parseInt:", stringschimbat2, typeof(stringschimbat2));

stringschimbat1 = parseFloat(string1);
stringschimbat2 = parseFloat(string2);
console.log("parseFloat:", stringschimbat1, typeof(stringschimbat1));
console.log("parseFloat:", stringschimbat2, typeof(stringschimbat2));

stringschimbat1 = Number(string1);
stringschimbat2 = Number(string2);
console.log("Number:", stringschimbat1, typeof(stringschimbat1));
console.log("Number:", stringschimbat2, typeof(stringschimbat2));

// Task 4: Variable Naming and Scope
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

// Task 5: Working with Multiple Declarations
let [a, b, c, d, e] = [1, 2, 3, 4, 5];
console.log("Înainte de swap:", a, b, c, d, e);

// Swap values (rotation)
[a, b, c, d, e] = [b, c, d, e, a];
console.log("După swap (rotire):", a, b, c, d, e);
