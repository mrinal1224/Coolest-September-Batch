// object.Create()

let carPrototype = {
    displayInfo : function(){
        return `This is a ${this.brand} ${this.year} ${this.model}.`; 
    }
}


let car1 = Object.create(carPrototype)
car1.brand = 'Mercedes'
car1.year = 2015
car1.model = 'S-class'

let car2 = Object.create(carPrototype)
car2.brand = 'BMW'
car2.year = 2015
car2.model = 'X-6'

console.log(car2.displayInfo())


