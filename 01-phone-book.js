/* Write a function that reads names and numbers ▪ Store them in an associative array and print them ▪ If same name occurs, safe the latest number */

function solve(input) {
	let phonebook = {};
	for (let string of input) {
		let tokens = string.split(" ");
		let name = tokens[0];
		let number = tokens[1];
		phonebook[name] = number;
	}
	for (let key in phonebook) {
		console.log(`${key} -> ${phonebook[key]}`);
	}
}

solve([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);
