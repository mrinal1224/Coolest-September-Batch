let nums = [1, 2, 3, 4, 5];

// sqaure the numbers

let sqauredArr = nums.map(function (num) {
  return num * num;
});

// console.log(sqauredArr)

Array.prototype.myMap = function (callback) {
  // create a new Array

  let resultantArray = [];

  //   console.log("This is your array  " + this)

  for (let i = 0; i < this.length; i++) {
    resultantArray.push(callback(this[i]));
  }

  return resultantArray;
};

let sqaured = nums.myMap(function(num){
    return num*num
}); // nums array

let cubes = nums.myMap(function(num){
    return num*num*num
})


console.log(Array.prototype)


console.log(nums)



console.log(sqaured);
console.log(cubes)
