import {restaurant} from "./Restaurant_Object.js";

const arr = [7,8,9];
const spreadOperator = [1,2, ...arr];
console.log(spreadOperator); // whole list
console.log(...spreadOperator); // each element

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.mainMenu];
console.log(fullMenu);

const str = "Norbert";
const strLetters = [...str, "", "S."]
console.log(strLetters);

const ingredients = ["A", "B", "C", "D"];
restaurant.orderPaste(...ingredients);

const newRestaurant = {...restaurant, founder: "Pablo Malaklave"};
console.log(newRestaurant);

restaurant.orderPizza("ham", "onion", "spinach");
