module.exports = function higher_order(operation, num) {
	if (!num) return;
	operation();
	higher_order(operation, --num);
}