const person1={
    name : 'Mark',

   printDetails : function(hobbie1){
    console.log(`I am ${this.name} I love  ${hobbie1}`)
   }

}

const person2={
    name : 'John'
}

let pd = person1.printDetails.bind(person2)

pd(['Swimming'])