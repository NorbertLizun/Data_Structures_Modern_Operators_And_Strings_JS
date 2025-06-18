
const restaurantOne = {
    name: "Capri",
    numberOfGuests: 0
};

const restaurantTwo = {
    name: "Muto Buenoo",
    owner: "Giovanni Rosso"
};

// Its not work for 0 value (0 = false)
restaurantOne.numberOfGuests ||= 10; // restaurantOne.numberOfGuests = restaurantOne.numberOfGuests || 10
restaurantTwo.numberOfGuests ||= 10; // restaurantTwo.numberOfGuests = restaurantTwo.numberOfGuests || 10

// Nullish coalescing work with 0 :)
restaurantOne.numberOfGuests ??= 15; // restaurantOne.numberOfGuests = restaurantOne.numberOfGuests || 10
restaurantTwo.numberOfGuests ??= 15; // restaurantTwo.numberOfGuests = restaurantTwo.numberOfGuests || 10

restaurantTwo.owner &&= "<ANNONYMOUS>"; // restaurantTwo.owner = restaurantTwo.owner && "<ANNONYMOUS>";

console.log(restaurantOne);
console.log(restaurantTwo);