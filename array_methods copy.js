
const groceryList = [
  { name: "Apples", price: 1.5 },
  { name: "Bananas", price: 1.0 },
  { name: "Milk", price: 2.0 },
  { name: "Eggs", price: 3.0 },
  { name: "Bread", price: 2.5 },
];

function getUserInput() {
  const userInput = prompt("Enter a grocery item (e.g., 'Oranges'): ");
  return userInput;
}

function findGroceryItem(itemName) {
  const foundItem = groceryList.find((item) => item.name === itemName);
  return foundItem;
}

function filterGroceryItems(priceThreshold) {
  const affordableItems = groceryList.filter(
    (item) => item.price <= priceThreshold
  );
  return affordableItems;
}

function calculateTotalPrice() {
  const totalPrice = groceryList.reduce((total, item) => {
    total + item.price}, 0);
  return totalPrice;
}

function mapItemNames() {
  const updatedList = groceryList.map((item) => {
    return { ...item, name: item.name.toUpperCase() };
  });
  return updatedList;
}

function sliceGroceryList(start, end) {
  const slicedList = groceryList.slice(start, end);
  return slicedList;
}

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
