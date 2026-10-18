console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
const favoriteFoods = ["Ramen", "Sushi", "Tacos", "Pizza", "Pad Thai", "Burgers"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(`One of my favorite foods is ${favoriteFoods[i]}.`);
}

// 3. Print the ranking for each food
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Function that prints a recommendation
function printFoodRecommendation(foodName) {
  console.log(`Have you ever tried ${foodName}?`);
  console.log(`I always recommend ${foodName} to friends.`);
  console.log(`Trust me — ${foodName} is delicious.`);
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Tacos");
printFoodRecommendation("Sushi");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name.
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    console.log(friendFavorites[i]);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
const foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    foodsWithA.push(friendFavorites[i]);
  }
}
console.log(foodsWithA);

// 7 and 8. Split the friends' foods into long and short names
const longFoodNames = [];
const shortFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > 6) {
    longFoodNames.push(friendFavorites[i]);
  } else {
    shortFoodNames.push(friendFavorites[i]);
  }
}

// 9. Print both arrays and compare
console.log(longFoodNames);
console.log(shortFoodNames);
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are the same number of long and short foods.");
}

// 10. STRETCH: Find the longest food name
let longestFood = friendFavorites[0];
for (let i = 1; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > longestFood.length) {
    longestFood = friendFavorites[i];
  }
}
console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`);