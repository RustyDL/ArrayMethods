// Initialize an array of grocery items
const groceryList = [
  { name: "Apples", price: 1.5 },
  { name: "Bananas", price: 1.0 },
  { name: "Milk", price: 2.0 },
  { name: "Eggs", price: 3.0 },
  { name: "Bread", price: 2.5 },
];

// Function to get user input using prompt
function getUserInput() {
  const userInput = prompt("Enter a grocery item (e.g., 'Oranges'): ");
  return userInput;
}

// Function to find a specific item
function findGroceryItem(itemName) {
  const foundItem = groceryList.find((item) => item.name === itemName);
  return foundItem;
}

// Function to filter items based on a condition
function filterGroceryItems(priceThreshold) {
  const affordableItems = groceryList.filter(
    (item) => item.price <= priceThreshold
  );
  return affordableItems;
}

// Function to calculate the total price of items
function calculateTotalPrice() {
  const totalPrice = groceryList.reduce((total, item) => {
    total + item.price}, 0);
  return totalPrice;
}

// Function to change the name of each item
function mapItemNames() {
  const updatedList = groceryList.map((item) => {
    return { ...item, name: item.name.toUpperCase() };
  });
  return updatedList;
}

// Function to slice the array
function sliceGroceryList(start, end) {
  const slicedList = groceryList.slice(start, end);
  return slicedList;
}

// Main program
const userInput = getUserInput();
if (userInput) {
  const foundItem = findGroceryItem(userInput);
  if (foundItem) {
    console.log("Item found:", foundItem);
  } else {
    console.log("Item not found.");
  }

  const affordableItems = filterGroceryItems(2.0);
  console.log("Affordable items:", affordableItems);

  const totalPrice = calculateTotalPrice();
  console.log("Total price of all items: $" + totalPrice);

  const updatedList = mapItemNames();
  console.log("Updated item names:", updatedList);

  const slicedList = sliceGroceryList(1, 4);
  console.log("Sliced list:", slicedList);
}
