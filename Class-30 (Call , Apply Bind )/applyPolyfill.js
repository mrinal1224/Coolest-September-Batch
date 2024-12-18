// Polyfill of call method
Function.prototype.myApply = function(context={} , args=[]){
    
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
  
    printDetails : function(location){
      console.log(`${this.name} ${location}`)
    }
  
  
  
  }
  
  const person2 = {
      name : 'Mark',
      age : 24,
  }
  
   person1.printDetails.myApply(person2 , ['Delhi'])
  


