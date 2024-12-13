// Create a constructor function for Cars
// and the properties should be , 
// Brand , name , Color , TopSpeed
function Car(Brand , Name , Color , TopSpeed){
    this.brand = Brand,
    this.name = Name,
    this.color = Color,
    this.topSpeed = TopSpeed
   // methods inside a contructor function
    this.drive = function(){
        console.log(`I am driving ${this.name} at ${this.topSpeed}`)
    }
}

const car1 = new Car('Mercedes' , 'G-wagon' , 'Red' , '300KM/hr')
const car2 = new Car('BMW' , 'X-6' , 'White' , '250KM/hr')

console.log(car1)
console.log(car2)

car1.drive()
car2.drive()


