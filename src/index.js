
// You should implement your task here.
//
module.exports = function towelSort(matrix) {
	if (matrix == null) return [];
	const line = matrix.reduce((acc, cur, i) => {
		cur.sort((a, b) => (i % 2 == 0) ? a - b : b - a);
		return acc.concat(cur);
	}, []);
	return line;
}


