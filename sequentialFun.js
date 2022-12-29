function sleepOne(ms) {
    console.log("sleep one called");
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve()
            console.log("sleep one resolved")
        }, ms)
    });
}

function sleepTwo(ms) {
    console.log("sleep two called")
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve()
            console.log("sleep two resolved")

        }, ms)
    })
}

console.time("await")
sleepOne(10000)
console.log("============")
sleepTwo(10000)
console.timeEnd("await")