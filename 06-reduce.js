module.exports = function(inputWords) {
	return inputWords.reduce(function(counts, word) {
		counts[word] = counts[word] || 0;
		counts[word]++;
		return counts;
	}, {});
}