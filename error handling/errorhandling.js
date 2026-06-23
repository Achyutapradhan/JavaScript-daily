//simple try catch
// try
// {
// const result = somefunction();
// }
// catch (error) {
//     console.error(error);
// }
// console.log("Error handling module loaded successfully.");


// custom error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
const result = divide(10, 0);
console.log("Result:", result);
} 
catch (error) {
    console.error("Error:", error.message);
}
finally {
    console.log("I'm in finally block, I will always execute.");
}
console.log("Error handling module loaded successfully.");