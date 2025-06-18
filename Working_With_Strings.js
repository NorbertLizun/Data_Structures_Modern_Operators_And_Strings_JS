const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B7321"[0]);

console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf("")));
airline.slice(airline.lastIndexOf(" "));

const isMiddleSeat = function (seat) {
    const seatCode = seat.slice(-1);
    seatCode === "B" || seatCode === "C"
        ? console.log("WIN")
        : console.log("SAD");
}

isMiddleSeat("11B");
isMiddleSeat("2222C");
isMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "jOnAS";
const lowerCase = passenger.toLowerCase();
const passengerCorrect = lowerCase[0].toUpperCase() + lowerCase.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedLoginEmail = lowerEmail.trim();

console.log(trimmedLoginEmail);

const normalizedEmail = loginEmail
    .toLowerCase()
    .trim();

console.log(normalizedEmail === email);

console.log(normalizedEmail);


//REPLACING
const priceUSA = "288,97$"
const pricePL = priceUSA.replace("$", "PLN")
console.log(pricePL);

const announcement = "All passengers come to boarding door 23. Boarding door 23";

//Replace only the first one
console.log(announcement.replace("door", "gate"));
//Replace all
console.log(announcement.replaceAll("door", "gate"));

// Regular expression (g - global)
console.log(announcement.replace(/door/g, "gate"))

//Booleans
const nextPlane = "AirA320neo";
console.log(nextPlane.includes("A320"));
console.log(nextPlane.includes("Boeing"));
console.log(nextPlane.startsWith("Air"));


console.log(..."a+very+nice+string".split("+"));

const newUser = ["Mr.", "firstName", "lastName".toUpperCase()].join(" ");
console.log(newUser);

const capitalizeName = function (name) {
    const split = name.split(" ");
    const capitalizeList = [];

    for (const splitElement of split) {
        capitalizeList.push(splitElement[0].toUpperCase() + splitElement.slice(1))
    }

    console.log(...capitalizeList)
}

capitalizeName("jessoca ann smith davis");
capitalizeName("jonas schmed martil luter")

//Padding
const message = "Go to gate 23!"
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "-"));

const maskCreditCard = function (cardNumber) {
    const string = String(cardNumber);
    const lastFour = string.slice(-4);
    return lastFour.padStart(string.length, "*");
}

console.log(maskCreditCard(123123546456));
console.log(maskCreditCard(1235434645245123326));
console.log(maskCreditCard("123546456"));


// Repeat
const weatherMessage = "Bad weather... All Departues Delayed...."

console.log(weatherMessage.repeat(5))