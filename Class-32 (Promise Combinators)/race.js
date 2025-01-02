function quickResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Quickly rejected"), 1000);
  });
}

function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Slowly resolved"), 2000);
  });
}

Promise.race([quickResolve(), slowResolveOrFastReject()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
