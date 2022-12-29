let data = Promise.race([

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second")

        }, 2000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5 second")

        }, 5000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4 second")

        }, 4000)
    })
])
data.then((item) => {

    console.log("then block", item)
})
    .catch((err) => {
        console.log(err)
    })