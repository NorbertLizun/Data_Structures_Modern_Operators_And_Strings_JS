import {restaurant} from "./Enhanced_Object_Literals.js";

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

//Here we get error
// console.log(restaurant.openingHours.mon.open);

//With optional chaining we not get error, just undefined
console.log(restaurant.openingHours?.mon?.open);


const weekdays = ["monday", "tuesday", "wednesday", "tuesday", "friday", "saturday", "sunday"];

for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

//Method
console.log(restaurant.order?.(0, 1) ?? "Method not found");
console.log(restaurant.orderDrink?.(0, 1) ?? "Method not found");

//Arrays
const users = [
    {name: "John Doe", email: "johndoe@gmail.com"}
];

console.log(users[0]?.name ?? "User not found");
console.log(users[5]?.name ?? "User not found");
