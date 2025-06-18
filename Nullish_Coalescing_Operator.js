import {restaurant} from "./Restaurant_Object.js";

// if restaurant.numGuests = 0 it will not work (0 is false)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// its work because ?? work on null values and return 0
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);