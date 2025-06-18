import {restaurant} from "./Restaurant_Object.js";

const restaurantMap = new Map();

restaurantMap.set("name", "Classico Italiano");
restaurantMap.set(1, "Italy");
restaurantMap.set(2, "Portugal");

restaurantMap
    .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open 😊")
    .set(false, "We are close 🚫")

console.log(restaurantMap.get("open"));

const time = 21;

const isOpen = restaurantMap.get(time > restaurantMap.get("open") && time < restaurantMap.get("close"));
console.log(isOpen);

console.log(restaurantMap.has("categories"));

restaurantMap.delete("categories");

console.log(restaurantMap.size);


const array = [1, 2, 3, 4, 5];
restaurantMap.set(array, "TEST")
console.log(restaurantMap.get(array));


const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"], [2, "Java"], [3, "JS"], ["correct", 2], [true, "Correct 😊"], [false, "Wrong language 😵"]
]);

console.log(question);

//Convert object to map
const mapFromObject = new Map(Object.entries(restaurant.openingHours));
console.log(mapFromObject);

console.log(question.get("question"));

for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}

//Convert map to array
console.log([...question])

