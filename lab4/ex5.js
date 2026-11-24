const sum = (...args) => args.reduce((total, n) => total + n, 0);

console.log(sum(1, 2, 3, 4, 6));