//Create Objects using Constructor

function Engine(cylinders, size){
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size){
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = new Engine(cylinders,size);
}

let jack_car = new Car('Eagle', 'Talon TSi', 'silver', 4, 2.2);

let jill_car = new Car('Nissan', '300ZX', 'black', 4, 2.2);

console.log(`Jack's Car`,jack_car);

console.log(`Jill's Car`,jill_car);

// adds a property year to jack's car​​
jack_car.year = 2015; // However, this does not affect any other objects. ​​

// outputs black​​
console.log(`Jack's Car Year ${jack_car.year}`); 

// Unassigned properties of an object are undefined (and not null).​
console.log(`Jill's Car Year ${jill_car.year}`); 
