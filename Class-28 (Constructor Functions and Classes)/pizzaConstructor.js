function Pizaa(Toppings , Crust , Size){
    this.toppings = Toppings,
    this.crust = Crust,
    this.size = Size

    console.log(`A Pizza with ${this.toppings.join(', ')} and ${this.crust} crust and the size is ${this.size}`)
}


let pizza1 = new Pizaa(['cheese' , 'onion'] ,'Thin' , 'Large')


let pizza2 = new Pizaa(['tomatoes' , 'Mushrooms'] ,'Thick' , 'small')

console.log(pizza1)

console.log(pizza2)



