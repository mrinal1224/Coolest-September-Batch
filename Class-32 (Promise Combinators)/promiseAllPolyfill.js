Promise.myall = function (values) {
  const promise = new Promise(function (resolve, reject) {
    let result = []; // to store resolved values
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++; // 3
          if (total === values.length) resolve(result);
        })
        .catch((err) => {
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
  .catch((error) => console.log("Error", error));

let promises2 = [
  Promise.resolve(10),
  Promise.reject(new Error("Failed")),
  Promise.resolve(30),
];

Promise.myall(promises2)
  .then((results) => console.log("All resolved:", results))
  .catch((error) => console.error("Rejected:", error));

// Test case 3

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

function fetchUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 500);
  });
}

// Promise Combinators

// 1   .all

Promise.myall([fetchUserData(), fetchUserPosts()])
  .then((results) => {
    console.log("User Data -> ", results[0]);
    console.log("User Posts -> ", results[1]);
  })
  .catch((err) => {
    console.log(err);
  });
