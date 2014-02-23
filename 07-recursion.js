var orignalArr, index = 0;
function reduce(arr, fn, initial) {
	if (!arr.length) return initial;

	if (!orignalArr) orignalArr = arr;

	var head = arr[0];
	var tail = arr.slice(1);
	initial = fn(initial, head, index++, orignalArr);

	return reduce(tail, fn, initial);
}

module.exports = reduce;