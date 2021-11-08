/* Creating Array */

let carMakes = ['Nissan', 'Ford', 'Tata']; //or let cars = new Array('Nissan','Ford','Tata');

console.log('Fetching Car Makes');
console.log(carMakes);

// for any new car, the list can be updated in two ways

// 1. maintaining the order in which car is received

carMakes.push('BMW');

console.log('Fetching All Car Makes after push()');
console.log(carMakes); // Nissan Ford Tata BMW

// 2. putting the newest arrival in front

carMakes.unshift('Audi');

console.log('Fetching All Car Makes after unshift()');
console.log(carMakes);

// similarly when car is removed from the display, list can be updated in two ways

// 1. removing from the end

carMakes.pop();

console.log('Fetching All Car Makes after pop()');
console.log(carMakes);

// 2. removing from the front

carMakes.shift();

console.log('Fetching All Car Makes after shift()');
console.log(carMakes);

// Similar arrays can be created for car-colors and car-models

// An array of array can be created for complete set of car details

let cars = [];
let make = 'Eagle';
let model = 'Talon TSi';
let color = 'Blue';

let car = [];
car.push(make);
car.push(model);
car.push(color);

cars.push(car);

make = 'Nissan';
model = 'Sentra Premium';
color = 'Red';
car = [];

car.push(make);
car.push(model);
car.push(color);

cars.push(car);

console.log('Fetching All Cars with All Details');
console.log(cars);
