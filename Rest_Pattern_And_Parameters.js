import {restaurant} from "./Restaurant_Object.js";

const [one, two, ...others] = [1, 2, 3, 4, 5];

console.log(one);
console.log(two);
console.log(others);

const [pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza);
console.log(risotto);
console.log(otherFood);

//Objects
const {sat, ...weekDays} = restaurant.openingHours;

console.log(sat);
console.log(weekDays);

//Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7, 8);

const x = [25, 5, 7];
add(...x);
