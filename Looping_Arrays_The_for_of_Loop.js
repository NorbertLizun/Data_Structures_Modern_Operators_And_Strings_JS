import {restaurant} from "./Restaurant_Object.js";

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const meal of menu) {
    console.log(meal);
}

for (const meal of menu.entries()) {
    console.log(`${meal[0] + 1}: ${meal[1]}`);
}

for (const [i, meal] of menu.entries()) {
    console.log(`${i + 1}: ${meal}`);
}
