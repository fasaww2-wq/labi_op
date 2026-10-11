const IpToNum = (ip = '127.0.0.1') => {

    const ipArray = ip.split('.');
    const ipArrayNumbers = ipArray.map(v => parseInt(v, 10));
    
    const res = ipArrayNumbers.reduce((acc, v, index) => {
        return acc + (v <<(3 - index) * 8);
    }, 0);

    return res;

};
console.log(IpToNum())