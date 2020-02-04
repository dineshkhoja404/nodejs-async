const fs = require('fs');

let consoleCount = 1;
let fileCount = 1;

let tableVar = setInterval(myTable, 3000);
let fileVar = setInterval(myFile, 2000);

function myTable() {
	if (consoleCount > 10) {
		console.log('table 2020 completed');
		clearInterval(tableVar);
	}
	else {
		let d = new Date();
		let t = d.toLocaleTimeString();
		console.log('console', t, 2020 * consoleCount);
		consoleCount++;
	}
}

function myFile() {
	if (fileCount > 10) {
		let completed = 'table 2021 completed..'
		fs.appendFile('table.txt', completed, (data) => { });
		clearInterval(fileVar);
	}
	else {
		let d = new Date();
		let t = d.toLocaleTimeString();
		let str = t + ' ' + 2021 * fileCount + '\n';
		fs.appendFile('table.txt', str, (data) => {
		});
		fileCount++;
	}
}
