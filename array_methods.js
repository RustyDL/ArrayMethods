
const names = ['Apple', 'Banana', 'Milk', 'Eggs', 'Bread'];

const items = [
    { id: 1, name: "Apples", price: 1 },
    { id: 2, name: "Banana", price: 5 },
    { id: 3, name: "Milk", price: 2 },
    { id: 4, name: "Eggs", price: 3 },
    { id: 5, name: "Bread", price: 2 },
  ];
  
  function getUserInput() {
    const name = prompt("Enter a grocery item from the list: Apple, Bananas, Milk, Eggs, or Bread.");
    return name;
  }
  
  // Find a specific item
  function findGroceryItem(itemName) {
    const foundItem = groceryList.find((items) => item.name === names);
    if(found){
        console.log('We found it');
        console.log(found);
    }
    else {
        console.log('We could not find ')
    }
    return foundItem;
  }
  
  function filterGroceryItems(priceThreshold) {
    const affordableItems = groceryList.filter((item) => item.price <= priceThreshold);
    return affordableItems;
  }
  
  function calculateTotalPrice() {
    const totalPrice = groceryList.reduce((total, item) => total + item.price, 0);
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
  