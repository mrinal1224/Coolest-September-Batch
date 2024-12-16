class Car{
    constructor(Brand , Name , Color , TopSpeed , fuelTankCapcity){
      this.brand=Brand,
      this.name = Name,
      this.color = Color,
      this.topSpeed = TopSpeed,
      this.fuelTankCapcity
    }

    drive(){
        console.log(`I am driving ${this.name} at ${this.topSpeed}`)
    }

   


    static compareSpeed(car1, car2) {
        if (car1.topSpeed > car2.topSpeed) {
            console.log(`${car1.name} is faster than ${car2.name}`);
        } else if (car1.topSpeed < car2.topSpeed) {
            console.log(`${car2.name} is faster than ${car1.name}`);
        } else {
            console.log(`${car1.name} and ${car2.name} have the same top speed`);
        }
    }
}

class ElectricCar extends Car {
      constructor(Brand , Name , Color , TopSpeed , BatteryCapcity , TimeToCharge){
        super(Brand , Name , Color , TopSpeed)
        this.batteryCapcity = BatteryCapcity
        this.timeToCharge = TimeToCharge
      }

      
}












const car1 = new Car('Mercedes' , 'G-wagon' , 'Red' , '300KM/hr')
const car2 = new Car('BMW' , 'X-6' , 'White' , '250KM/hr')
const car3 = new Car('Rolls Royce' , 'Phantom' , 'Black' , '200KM/hr')
const car4 = new Car('Ferrai' , 'GT' , 'blue' , '200KM/hr')

const evCar1 = new ElectricCar('Tesla' , 'Model-S' , 'White' , '350KM/hr' , '100' , '3hrs')


 console.log(car1)
// console.log(car2)
// console.log(car3)
// console.log(car4)

 console.log(evCar1)
// Car.compareSpeed(car1 , car2)


// car1.drive()
// car2.drive()
// car3.drive()
// car4.drive()