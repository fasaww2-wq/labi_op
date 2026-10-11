const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }

    res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;

}
console.log(random(11))
console.log(random(12, 322))