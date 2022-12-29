

const arr = [{ 'n': 4 }, { 'n': 2 }, { 'n': 6 }]

let sum = 0;

arr.forEach(element => {
    sum += element.n;
});

console.log(sum);
