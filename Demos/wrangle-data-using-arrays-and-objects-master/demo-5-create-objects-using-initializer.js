//Create Objects using Initializer

let myCar = {
    make: 'Honda',
    model: 'ZXI',
    color: 'red', 
    wheels: 4, 
    engine: {
        cylinders: 4, 
        size: 2.2
    }
}

console.log(myCar);

console.log('Car Details');

//Using (.) dot notation

console.log(`Make: ${myCar.make}`);
console.log(`Model: ${myCar.model}`);
console.log(`Color: ${myCar.color}`);
console.log(`Wheels: ${myCar.wheels}`);
console.log('Engine Details');
console.log(`Cylinders: ${myCar.engine.cylinders}`);
console.log(`Size: ${myCar.engine.size}`);

//Using [] notation

console.log(`Make: ${myCar['make']}`);
console.log(`Model: ${myCar['model']}`);
console.log(`Color: ${myCar['color']}`);
console.log(`Wheels: ${myCar['wheels']}`);
console.log('Engine Details');
console.log(`Cylinders: ${myCar['engine']['cylinders']}`);
console.log(`Size: ${myCar['engine']['size']}`);
