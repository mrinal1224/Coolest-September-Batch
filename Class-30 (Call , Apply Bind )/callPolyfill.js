// Polyfill of call method
Function.prototype.myCall = function(context={} , ...args){
    
    console.log(this) //  - method

    if(typeof this!='function'){
        throw new Error ('cannot be called')
    }

    context.myFunction = this

    context.myFunction(...args)


}


console.dir(Function.prototype)















const person1 = {
  name : 'John',
  age : 23,

  printDetails : function(){
    console.log(`${this.name}`)
  }



}

const person2 = {
    name : 'Mark',
    age : 24,
}

 person1.printDetails.myCall(person2 , 'Delhi')

 //

 // person2 - context
 // this - printDetails







