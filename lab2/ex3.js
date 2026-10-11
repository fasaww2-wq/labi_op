const average = (a, b) => (a+b) / 2;

const square = (x) => Math.pow(x, 2);

const cube = (x) => Math.pow(x, 3);

const calculate = () => {
    array = [];
    for (i = 0; i <= 9; i++) {
        const x = average(square(i), cube(i));
        array.push(x);

    }
    return array

}

console.log(calculate())

