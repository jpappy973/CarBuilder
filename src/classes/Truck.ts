// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle{
  
  
  vin:string;
  color:string;
  make:string;
  model:string;
  year:number;
  weight:number;
  topspeed:number;
  wheels:Wheel[];
  towingCapacity:number;
  
  constructor(
    vin:string,
    color:string,
    make:string,
    model:string,
    year:number,
    weight:number,
    topspeed:number,
    wheels:Wheel[],
    towingCapacity:number,
  ){
    
    super()
    
    this.vin =vin;
    this.color = color;
    this.make =make;
    this.model = model;
    this.year = year;
    this.weight =weight;
    this.topspeed = topspeed;
    this.towingCapacity = towingCapacity;
    
    if(wheels.length !== 4){
      this.wheels = [new Wheel(),new Wheel(),new Wheel(),new Wheel()]
    }else{
      this.wheels = wheels;
    }


    
  }
  
  tow(vehicle: Truck | Motorbike | Car): void {
   
   
    if(this.weight < this.towingCapacity){
      console.log(`Vehicle is being towed.`)
    }else{
      console.log(`Vehicle is too heavy to be towed.`)
    }
    
  }

  
  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topspeed} mph`);
    console.log(`Towing capacity:${this.towingCapacity}`)

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
    
  }
    
}

// Export the Truck class as the default export
export default Truck;
