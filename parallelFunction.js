async function runInParallel() {
    const promise1 = function1();
    const promise2 = function2();
    const results = await Promise.all([promise1, promise2]);
    console.log(results);  // results is an array containing the return values of function1 and function2
}

async function function1() {
    // do some async work
    return 'result1';
}

async function function2() {
    // do some async work
    return 'result2';
}

runInParallel();
