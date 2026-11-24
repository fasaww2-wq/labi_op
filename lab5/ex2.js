const array = () => {
    const data = [];

    const fn = (index) => data[index];

    fn.push = (value) => data.push(value);

    fn.pop = () => data.pop();

    return fn;

}
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1));
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop());