const removeElements = (arr, ...args) => {
    for (const element of args) {
        const i = arr.indexOf(element);
        if (i !== -1) {
            arr.splice(i, 1);
        }
    }

};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);