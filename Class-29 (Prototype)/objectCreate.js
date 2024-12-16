// object.Create()

let carPrototype = {
    displayInfo : function(){
        return `This is a ${this.brand} ${this.year} ${this.model}.`; 
    },

    drive : function(){
        return `I am driving ${this.model}`
    }
}


let car1 = Object.create(carPrototype)
car1.brand = 'Mercedes'
car1.year = 2015
car1.model = 'S-class'

console.log(car1.drive())

let car2 = Object.create(carPrototype)
car2.brand = 'BMW'
car2.year = 2015
car2.model = 'X-6'

console.log(car2.drive())

console.log(car2.displayInfo())


