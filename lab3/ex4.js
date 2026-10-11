const introspection = (iface) => {
    const res = [];

    for (const key in iface) {
        const value = iface[key];

        if (typeof value === 'function') {
            const arg_count = value.length;

            res.push([key, arg_count]);
        }

    }
    return res;
}
