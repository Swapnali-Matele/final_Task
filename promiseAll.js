let data = Promise.all([

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second")

        }, 2000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 second")

        }, 3000)
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