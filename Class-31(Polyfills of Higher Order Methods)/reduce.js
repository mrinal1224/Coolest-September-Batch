// How does the Reduce Method work

// 16
// 1+1 = 2

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator;
  let firstIndex;

  if (arguments.length == 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }

  for (let i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

let nums = [1, 2, 3, 4, 5];

let total = nums.myReduce(function(acc , currentValue){
    return acc = acc*currentValue
} ,1)

console.log(total)

