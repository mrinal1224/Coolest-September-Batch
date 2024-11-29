const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const countDisplay = document.getElementById('count');


let count = 0

// increment
incrementButton.addEventListener('click' , function(){
    count++
    countDisplay.innerText = count

})

decrementButton.addEventListener('click' , function(){
    if(count>0){
        count--
        countDisplay.innerText = count
    }

})

// reset button
resetButton.addEventListener('click' , function(){
    count = 0
    countDisplay.innerText = count
})
