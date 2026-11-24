const compose = (...fns) => {
    const errorH = [];

    const composed = (x) => {
        try {
            let result = x;
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result);

            }
            return result;
        } catch (error) {
            for (const handler of errorH) {
                handler(error);

            }
            return undefined;
        }
    };
    composed.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            errorH.push(handler);

        }
        return composed;
    };
    return composed;


};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
console.log(f(5));
