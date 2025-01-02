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

// 2. Promise.allSettled

Promise.allSettled([fetchUserData(), fetchUserPosts()]).then((results) => {
  console.log("User Data -> ", results[0]);
  console.log("User Posts -> ", results[1]);
}).catch((err) => {
    console.log(err);
  });
