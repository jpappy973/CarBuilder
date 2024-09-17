// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Truck class
    constructor(vin, color, make, model, year, weight, topspeed, wheels, towingCapacity) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle
        super();
        // TODO: The constructor should initialize the properties of the Truck class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topspeed = topspeed;
        this.towingCapacity = towingCapacity;
        // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (this.weight < this.towingCapacity) {
            console.log(`Vehicle is being towed.`);
        }
        else {
            console.log(`Vehicle is too heavy to be towed.`);
        }
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topspeed} mph`);
        console.log(`Towing capacity:${this.towingCapacity}`);
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
// Export the Truck class as the default export
export default Truck;
