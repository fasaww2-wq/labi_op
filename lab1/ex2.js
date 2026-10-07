const list1 = [true, 'hello', 5, 12, -200, false, false, 'word'];
const t_count = { number: 0, string: 0, boolean: 0 };
for (const i of list1) {
    const type = typeof i;
    if (type in t_count) {
       t_count[type]++;
    }
}

console.log(t_count);

const t_count_d = {};
for (const i of list1) {
    const type = typeof i;
    if (type  in t_count_d) {
       t_count_d[type]++;
    } else {
        t_count_d[type] = 1;

    
    }
}

console.log(t_count_d);

