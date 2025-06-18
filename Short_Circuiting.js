import {restaurant} from "./Restaurant_Object.js";

//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas"); // return 3 because 3 is ture (short-circuiting)
console.log("" || "Norbert");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || null || 0 || "" || "Hello" || 23);

// if restaurant.numGuests = 0 it will not work (0 is false)
const guests = restaurant.numGuests ? restaurant.numGuests : 15;
console.log(guests);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---------- AND ----------");

console.log(0 && "Jonas"); // return first false value = 0
console.log(7 && "Norbert"); // return last true value = Norbert
console.log(23 && "Hello" && "Jonas" && null && "Pablo"); // return first false value = null

//check if method exists
if (restaurant.orderPizza) {
    restaurant.orderPizza("ham", "tomato");
}

restaurant.orderPizza && restaurant.orderPizza("ham", "tomato");







