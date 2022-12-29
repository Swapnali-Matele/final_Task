const exampleArray = [5, 4, 3, 2, 1]


// .map() gives result into array
console.log(exampleArray.map(x => x).sort(function (a, b) {
    return a - b
}));

// and forEach() method gives  result one by one iteration
exampleArray.forEach(element => console.log(element));