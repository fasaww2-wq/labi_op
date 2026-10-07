const inc = (n) => n + 1;
const a = 5;
const b = inc(a);
console.dir({a, b});

const inc_obj = (num) => num.n += 1;
const obj = {n: 5};
inc_obj(obj);
console.dir(obj);