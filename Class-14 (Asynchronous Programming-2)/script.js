let promise1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        const isHeads = Math.random() >= 0.5 // Heads
        console.log(isHeads)
        if(isHeads){
            resolve('We got Heads Promise Fulfilled')
        }

        else{
            reject ('We got tails and the Promise Failed')
        }
    } , 1000)
})

// Handling promises
//then - resolve
//catch - reject
//finally - settled


// Success
promise1.then(function(output){
    console.log(output)
})

// Failure
promise1.catch(function(error){
    console.log(error)
})

// Settled

promise1.finally(function(){
    console.log('Promise settled')
})




