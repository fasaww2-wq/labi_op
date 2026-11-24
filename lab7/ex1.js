const removeElement = (arr, element) => {
    const i = arr.indexOf(element);
    if (i !== -1) {
        arr.splice(i, 1);
    }
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
