function Car(Brand , Model , Year){
    this.brand = Brand
    this.model = Model
    this.year = Year

    
}

Car.prototype.displayInfo = function(){
    return `This is a ${this.brand} ${this.model} ${this.year}.`; 
}


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




