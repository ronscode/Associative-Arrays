/* ▪ Write a function to store students with all their grades
▪ If a student appears more than once add the new grades ▪ At the end print the students sorted by average grade */

function solve(input) {
	let map = new Map();
	for (let string of input) {
		let tokens = string.split(" ");
		let name = tokens[0];
		let grades = tokens.splice(1, tokens.length).map(Number);
		//	console.log(grades);
		// TODO: Fill the map
		map.set(name, grades);
	}
	//	console.log(map);
	let sorted = Array.from(map).sort((a, b) => average(a, b)); // TODO: Print each key and joined values
}
// TODO: Implement the average function

function average(a, b) {
	console.log(a[1], b);
	return a[1] - b[1];
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
