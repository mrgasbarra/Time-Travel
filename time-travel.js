/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let desination = 'Ancient Eygpt';
console.log(desination);


/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

function secondDestination(destination) {
    let desination = "Medieval Europe";
    return desination;
}

console.log(secondDestination(desination));

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = '2024-03-15';
console.log(travelDate);

//function secondTravelDate(travelDate){
//const travelDate = '2024-10-13';
//return travelDate;
//}

//console.log(secondTravelDate(travelDate));

/*
 * Observations:
 * TODO: Explain here: The const keyword prevents a variable from ever being reassigned or redeclare therefore when I declare in the function above, I will get a syntax error stating that
 * travelDate has already been declared. 
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel);
var timeMachineModel = 'T-800';
console.log(timeMachineModel);
/*
 * Observations:
 * TODO: Explain here: if we declare the variable timeMachineModel after we print the variable, it will hoist the variable to top but the variable still is not defined until after I
 * attempt to print the timeMachineModel so the value returned is undefined. But if we print after the variable has been defined then we print the declared variable. 
 */




