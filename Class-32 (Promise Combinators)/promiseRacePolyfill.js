//polyfill for promise.race
//Promise.race returns a single Promise which settles
//the first resolved or rejected promise and provides that as an output

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      throw new Error("Empty Array Passed or invalid value");
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

function quickResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Quickly rejected"), 1000);
  });
}

function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Slowly resolved"), 500);
  });
}

Promise.myRace([quickResolve(), slowResolveOrFastReject()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
