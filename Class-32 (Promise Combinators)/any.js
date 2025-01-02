function resolveQuickly() {
  return new Promise((resolve , reject) => {
    setTimeout(() => reject("Resolved quickly"), 500);
  });
}

function resolveSlowly() {
  return new Promise((resolve , reject) => {
    setTimeout(() => resolve("Resolved slowly"), 100);
  });
}

function rejectFast() {
  return new Promise((resolve , reject) => {
    setTimeout(() => reject(new Error("Rejected fast")), 50);
  });
}

function rejectSlowly() {
  return new Promise((resolve , reject) => {
    setTimeout(() => reject(new Error("Rejected slowly")), 1500);
  });
}

Promise.any([
  rejectFast(),
  rejectSlowly(),
  resolveQuickly(),
  resolveSlowly(),
]).then((result) => {
    console.log("Result -> "  , result)
});
