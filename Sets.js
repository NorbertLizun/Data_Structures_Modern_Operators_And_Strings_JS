const ordersSet = new Set(["Pasta", "Bill", "Bill"]);

console.log(ordersSet.size);
console.log(ordersSet.has("Pasta"));

ordersSet.add("Bread");

console.log(ordersSet);

ordersSet.delete("Pasta");
console.log(ordersSet);

for (const string of ordersSet) {
    console.log(string);
}

console.log(new Set("Norbert"));

const staff = ["Waiter", "Chef", "Waiter", "Manager"];

const arrayNoDuplicates = [...new Set(staff)];
console.log(arrayNoDuplicates);



const italianFood = new Set([
    "pasta", "gnocchi", "tomatoes", "olive oil", "garlic", "basil"
]);

const mexicanFood = new Set([
    "tortillas", "beans", "rice", "tomatoes", "avocado", "garlic"
]);

//Common elements in both sets (new Set)
const commonFood = italianFood.intersection(mexicanFood);
console.log(commonFood);

//Uniques elements in both sets
const uniqueItalianFoodAndMexican = italianFood.symmetricDifference(mexicanFood);
console.log(uniqueItalianFoodAndMexican);

//All elements from both sets (no duplicates)
const unionFood = italianFood.union(mexicanFood);
console.log(unionFood);

//All elements unique in first set
const uniqueItalianFood = italianFood.difference(mexicanFood);
console.log(uniqueItalianFood);




