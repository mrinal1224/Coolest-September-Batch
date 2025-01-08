Promise.myall = function (values) {
  const promise = new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === values.length) resolve(result);
        }).catch((err) => {
          reject(err);
        });
    });
  });
  return promise;
};

// Test 1: All promises resolve
let promises1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

Promise.myall(promises1)
  .then((results) => console.log("All Promises Resolved", results))
  .catch((error)=> console.log("Error", error));

  let promises2 = [
    Promise.resolve(10),
    Promise.reject(new Error('Failed')),
    Promise.resolve(30)
];

Promise.myall(promises2)
    .then(results => console.log('All resolved:', results))
    .catch(error => console.error('Rejected:', error));
