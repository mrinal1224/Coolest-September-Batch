function Car(Brand , Model , Year){
    this.brand = Brand
    this.model = Model
    this.year = Year

    
}

function Animal(Name , Type){
   this.name = Name
   this.type = Type
}

Animal.prototype


let animal1 = new Animal('Lion' , 'Carnivore')



console.log(animal1)

Car.prototype.__proto__.displayInfo = function(){
    return `This is a ${this.brand} ${this.model} ${this.year}.`; 
}

console.log(animal1.displayInfo())

// console.log(Car.prototype.__proto__.__proto__) null


let car1 = new Car('Mercedes' , 'S-class', '2016')
let car2 = new Car('BMW' , 'x-6', '2018')
let car3 = new Car('BMW' , 'x-4', '2014')
let car4 = new Car('Toyota' , 'Anything', '2010')

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

console.log(car1.displayInfo())
console.log(car2.displayInfo())

let doesExist = car1.hasOwnProperty('brand')
console.log(doesExist)




