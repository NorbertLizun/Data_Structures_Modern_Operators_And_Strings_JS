import {restaurant} from "./Restaurant_Object.js";

let  [first,  second] = restaurant.categories;
console.log(first, second);

//Switching variables
[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));

let [starter, main] = restaurant.order(2, 0)
console.log(starter, main);

const nested = [2,3,4,[5,6]]

const [a, b, c, d] = nested
let [t, y] = d
console.log(t)

const [x, , , [k, j]] = nested;
console.log(x, k, j);

// Default values
const [p = 1,r = 1, q= 1] = [8, 9]
console.log(p, q, r)