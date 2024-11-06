let promise = new Promise(function(resolve , reject){
    setTimeout(function(){
        const isHeads = Math.random() >= 0.5 // Heads
        if(isHeads){
            resolve('We got Heads Promise Fulfilled')
        }

        else{
            reject ('We got tails and the Promise Failed')
        }
    })
})

console.log(promise)