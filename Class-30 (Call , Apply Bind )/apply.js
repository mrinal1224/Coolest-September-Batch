const person1={
    name : 'Mark',

   printDetails : function(hobbie1 , hobbie2 , hobbie3){
    console.log(`I am ${this.name} I love  ${hobbie1} , ${hobbie2} , ${hobbie3}`)
   }

}

const person2={
    name : 'John'
}

// call
person1.printDetails.apply(person2 , ['Hiking' , 'Swimming' , 'Music'])




