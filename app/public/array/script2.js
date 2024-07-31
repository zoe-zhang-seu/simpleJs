// Create an array with some initial elements
let fruits = ["Orange", "Pineapple", "Strawberry"];

// Display the initial array
console.log("Initial array:", fruits);

// Add an element to the end of the array using push
fruits.push("Mango");
console.log("Array after push:", fruits);

// Remove the last element of the array using pop
let lastFruit = fruits.pop();
console.log("Removed fruit:", lastFruit);
console.log("Array after pop:", fruits);

// Add multiple elements to the end of the array using push
fruits.push("Blueberry", "Kiwi", "Raspberry");
console.log("Array after pushing multiple elements:", fruits);

// Remove the last element of the array again using pop
lastFruit = fruits.pop();
console.log("Removed fruit:", lastFruit);
console.log("Array after another pop:", fruits);
