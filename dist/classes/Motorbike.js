// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
//The Motorbike class to make new Motorbikes
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            this.wheel = [new Wheel(), new Wheel()];
        }
        else {
            this.wheel = wheels;
        }
    }
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Wheel 1: ${this.wheel[0].getDiameter} inch with a ${this.wheel[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheel[1].getDiameter} inch with a ${this.wheel[1].getTireBrand} tire`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
