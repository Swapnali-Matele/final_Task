let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [4, 5, 6, 7, 8, 9]

function mergerArrandGetDuplicate(arr1, arr2) {
    let mergedArrray = [...arr1, ...arr2]   //spread operator
    console.log(mergedArrray)
    let result = [...new Set(mergedArrray)]    //set save or accept only unique elements
    console.log(result)

}

mergerArrandGetDuplicate(arr1, arr2)