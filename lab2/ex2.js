const range = (start, end) => {
    const len = end - start;
    if (len < 0) return [];

    const array = [];
    for (let i = start; i < (end + 1); i++) {
        array.push(i);
    }
    return array;

}

console.log(range(15, 30));

const rangeOdd = (start, end) => {
    const len = end - start;
    if (len < 0) return [];

    const array = [];
    for (let i = start; i < (end + 1); i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }

    return array;

}

console.log(rangeOdd(15, 30));