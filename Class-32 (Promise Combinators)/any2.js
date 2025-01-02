function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((reject) => {
        setTimeout(() => reject(new Error("Rejected fast")), 300);
    });
}

function rejectSlowly() {
    return new Promise((reject) => {
        setTimeout(() => reject(new Error("Rejected slowly")), 1500);
    });
}

Promise.any([rejectFast(), rejectSlowly(), resolveQuickly(), resolveSlowly()])
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
        if (error instanceof AggregateError) {
            // Log each error individually
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}:`, err.message));
        }
    });