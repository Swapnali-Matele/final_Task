// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     const filteredElements = arry.filter(item => {
//         if (uniqueElements.has(item)) {

//             //uniqueElements.delete(item);
//         } else {
//             return item
//         }
//         // console.log(item)
//     });
//     //console.log("hello")
//     return [...new Set(uniqueElements)]
// }

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);


const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);