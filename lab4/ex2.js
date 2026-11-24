const sum = (...args) => {
    let total = 0;
    for (const n of args) {
        total += n;

    }
    return total;
}
console.log(sum(4, 33, -5, 56));
