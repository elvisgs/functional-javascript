function duckCount() {
	var count = 0;

	for (var i = 0, l = arguments.length; i < l; ++i) {
		var obj = arguments[i];
		if (Object.prototype.hasOwnProperty.call(obj, 'quack')) count++;
	}

	return count;
}

module.exports = duckCount