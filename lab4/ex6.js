const max = (matrix) => {
    let maxV = matrix[0][0];

    for (const row of matrix) {
        for (const value of row) {
            if (value > maxV) {
                maxV = value;
            }
        }
    }
    return maxV;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);