import {restaurant} from "./Restaurant_Object.js";

restaurant.oderDelivery({
    time: "22:30",
    address: "Okrzei 24",
    mainIndex: 2,
    starterIndex: 2
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//Rename variables
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Set default value and rename variables
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 222;
const object = {a: 23, b:7, c:13};

({a, b} = object)
console.log(a, b);

const {fri: {open, close}} = openingHours;
console.log(open, close);