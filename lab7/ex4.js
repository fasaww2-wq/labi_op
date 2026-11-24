const difference = (arr1, arr2) => {
    const result = [];
    for (const element of arr1) {
        if (!arr2.includes(element)) {
            result.push(element);
        }
    }
    return result;
};
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);