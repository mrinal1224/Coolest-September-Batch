function parent(){
    var a = 10;
    function child(){

        var b = 20;
        console.log(a) // 10
        console.log(b)

        function child2(){

            console.log(a+b) //30
        }
        return child2
    }
    return child
}
let childReceived = parent()
console.log(childReceived)
let child2Recieved = childReceived()
console.log(child2Recieved)
child2Recieved()



// let child2Recieved = childReceived()
// child2Recieved()
