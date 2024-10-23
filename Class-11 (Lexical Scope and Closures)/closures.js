function parent(){
    var a = 10
    function child(){

        console.log(a)
    }
     return child
}

let childFN = parent()
console.log(childFN) /
childFN()