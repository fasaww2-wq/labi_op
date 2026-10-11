const fn = () => {
    const obj = {name: 'vasya'};
    let obj1 = {name: 'vasya'};

    obj.name = 'vova';

    obj1.name = 'vova';

    obj1 = {name: 'vovchik'}
}

const createUser = (name, city) => {
    const obj = {name: name, city: city};
    return obj
}
console.dir(createUser('Andriy', 'Kyiv'))