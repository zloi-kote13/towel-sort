module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let buffer = [];
    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2)) {
            for (let j = 0; j < matrix[i].length; j++) {
                buffer.push(matrix[i][j]);
            }
        } else {
            for (let j = matrix[i].length - 1; j > -1; j--) {
                buffer.push(matrix[i][j]);
            }
        }
    }
    return buffer;
};