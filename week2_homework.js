// Pizza Place Homework

// Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = "Domino";
let numberOfToppings = 10;

// Print the variables and their types.
console.log(typeof pizzaPlace + ` ` + pizzaPlace);
console.log(typeof numberOfToppings + ` ` + numberOfToppings);

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(
  `I would like to order a pizza from ${pizzaPlace} with ${numberOfToppings} topping`
);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings < 10) {
  console.log(`"Quality, not quantity.`);
} else {
  console.log(`A whole lot of pizza`);
}
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.

// Bonus Challenge
// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
let i = 1;
while (i <= numberOfToppings) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
