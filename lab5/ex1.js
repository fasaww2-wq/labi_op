const seq = (...args) => {
    const fns = [...args];

    const chain = (...nextArgs) => {
        if (typeof nextArgs[0] === 'number') {
            let result = nextArgs[0];

            for (let i = fns.length - 1; i >= 0; i--) {
                const fn = fns[i];
                result = fn(result);


            }
        return result;
    }
    fns.push(...nextArgs);
    return chain;

};
return chain;

}
console.log(seq(x => x + 7)(x => x * 2)(5));
