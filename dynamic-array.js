/**
 * Creating a dynamic array in JavaScript involves letting the user add or remove elements based on their input. Here's an example implementation where you can interact with the array through prompts or commands:
 */

// Dynamic Array Example

// Initialize an empty array
let dynamicArray = [];

// Function to display the current array
function displayArray() {
 console.log("Current Array:", dynamicArray);
}

// Function to handle user input
function manageArray() {
 while (true) {
  // Get user input
  let action = prompt(
   "Enter a command:\n1. 'add' to add an element\n2. 'remove' to remove an element\n3. 'exit' to quit\nEnter your choice:"
  ).toLowerCase();

  if (action === "add") {
   let element = prompt("Enter the element to add:");
   dynamicArray.push(element);
   console.log(`Added "${element}" to the array.`);
  } else if (action === "remove") {
   let element = prompt("Enter the element to remove:");
   let index = dynamicArray.indexOf(element);
   if (index !== -1) {
    dynamicArray.splice(index, 1);
    console.log(`Removed "${element}" from the array.`);
   } else {
    console.log(`"${element}" not found in the array.`);
   }
  } else if (action === "exit") {
   console.log("Exiting program.");
   break;
  } else {
   console.log("Invalid command. Please try again.");
  }

  displayArray();
 }
}

// Start managing the array
manageArray();
