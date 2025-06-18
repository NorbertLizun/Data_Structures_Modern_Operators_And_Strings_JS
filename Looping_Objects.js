import {restaurant} from "./Restaurant_Object.js";

//Property NAMES
const propertiesKeys = Object.keys(restaurant.openingHours)
console.log(propertiesKeys)

for (const day of propertiesKeys) {
    console.log(day);
}

//Property VALUES
const propertiesValues = Object.values(restaurant.openingHours);
console.log(propertiesValues);

for (const day of propertiesValues) {
    console.log(day);
}

//Property ENTRIES (key, values)
const entries = Object.entries(restaurant.openingHours);
for (const [key, {open, close}] of entries) {
    console.log(key, open, close);
}