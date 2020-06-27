const readline = require("readline");

function input(line) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise(ok => {
		rl.question(line, ans => {
			ok(ans);
			rl.close();
		});
	});
}

module.exports = input;
