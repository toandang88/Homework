// Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = [
  "Pepperoni",
  "Mushroom",
  "Sausage",
  "Onion",
  "Green Pepper"
];

function listOfTopping() {
  let topping = ``;
  for (let i in pizzaToppings) {
    topping += pizzaToppings[i] + ", ";
  }
  return topping;
}

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
const pizzaName = "Pizza House";
function greetCustomer(name) {
  const topping = listOfTopping();
  console.log(`Welcome to ${name}, our toppings are ${topping}...`);
}

greetCustomer(pizzaName);

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust) {
  // Don't need to use parameters here since the function listOfTopping took care of getting out all value of topping
  const topping = listOfTopping();
  console.log(`one ${size} ${crust} pizza from with ${topping} coming up`);
  return size, crust, topping;
}

const pizzaType = getPizzaOrder("large", "thick", pizzaToppings);
console.log(pizzaType);
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza(size, crust, topping) {
  console.log(".....Cooking Pizzaaaaa......");
  const pizzaOrder = {
    size: size,
    crust: crust,
    topping: topping
  };
  return pizzaOrder;
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza() {
  const pizzaObject = preparePizza("large", "thin", pizzaToppings);
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with ${pizzaObject.topping},... Enjoy!`
  );
  return pizzaObject;
}
servePizza();
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
