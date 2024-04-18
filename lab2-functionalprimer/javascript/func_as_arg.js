function arrFunc(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

function applicatorFunc(inpFunc, s) {
    const arr = inpFunc();
    if (s === 's') {
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    } else {
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
    }
}

const a = parseInt(prompt("Enter the starting integer (a): "));
const b = parseInt(prompt("Enter the ending integer (b): "));

const x = applicatorFunc(() => arrFunc(a, b), 's');
console.log(x);