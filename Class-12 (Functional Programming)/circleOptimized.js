// // calculate area , circumference and diameter 
// of the raidus given for the circle
// Create functions for Each one of them
// Create new arrays to store respective values 
// Areas = []
// circumferences = []
// diameters = []


let circleRadius = [1,4 ,6 ,7,9]

function calculateArea(radi){
    return 3.14 *radi*radi
}

function calculateCircumference(radi){
    return 2*3.14*radi
}

function calculateDiameter(radi){
    return 2*radi
}

function calculate(raidusArr , cb){
  let data = [ ]

  for(let i=0 ; i<raidusArr.length ; i++){
        data.push(cb(raidusArr[i]) )
  }

  return data
}

let finalAreas = calculate(circleRadius ,calculateArea )
let finalCircumferences= calculate(circleRadius ,calculateCircumference )
let finalDiameters = calculate(circleRadius , calculateDiameter)
console.log(finalAreas)
console.log(finalCircumferences)
console.log(finalDiameters)



