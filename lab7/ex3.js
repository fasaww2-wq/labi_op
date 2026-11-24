const unique = (arr) => {
    const result = [];
    for (const element of arr) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }
    return result;
};
const result = unique([2, 1, 1, 3, 2]);
console.log(result);