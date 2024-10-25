// // calculate area , circumference and diameter 
// of the raidus given for the circle
// Create functions for Each one of them
// Create new arrays to store respective values 
// Areas = []
// circumferences = []
// diameters = []


let circleRadius = [1,4 ,6 ,7,9]

function calculateArea(raidusArr){
  let areas = [ ]

  for(let i=0 ; i<raidusArr.length ; i++){
        areas.push( 3.14 *raidusArr[i]*raidusArr[i])
  }

  return areas
}
let finalAreas = calculateArea(circleRadius)
console.log(finalAreas)


// circumferences

function calculateCircumference(raidusArr){
  let circumferences = []

  for(let i=0 ; i<raidusArr.length ; i++){
    circumferences.push(2*3.14*raidusArr[i])
  }

  return circumferences
}

let finalCircumferences = calculateCircumference(circleRadius)
console.log(finalCircumferences)

// Diameters

function calculateDiamter(raidusArr){
    let diameters= []
  
    for(let i=0 ; i<raidusArr.length ; i++){
      diameters.push(2*raidusArr[i])
    }
  
    return diameters
  }

  let finalDiameters = calculateDiamter(circleRadius)
  console.log(finalDiameters)


