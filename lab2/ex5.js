const phone_book = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    {name: 'Donald', phone: '+380332234587'},
    {name: 'Yaroslav', phone: '+380773226868'}
];
const findPhoneByName = (name) => {
    for (const i of phone_book) {
        if (name === i.name) {
            return i.phone;

        }
    }
};

console.log(findPhoneByName('Donald'));

const phoneBook = {
    Donald: '+380332234587',
    Yaroslav: '+380773226868'

};

const findPhoneByNameHash = (name) => {
    return phoneBook[name];
}

console.log(findPhoneByNameHash('Donald'));