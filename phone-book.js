/* Write a function that reads names and numbers ▪ Store them in an associative array and print them ▪ If same name occurs, save the latest number 
1. Write the function and call. 
2. Create variable to store results. 
*/
function solve(someArray) {
	let phonebook = {};
	for (let string of someArray) {
		let nameNumber = string.split(" ");
		//	console.log(nameNumber); // new array [ "Some Name" , "Some #####"]
		let name = nameNumber[0];
		let number = nameNumber[1];
		phonebook[name] = number; // go to my object phonebook, create the key (Tim) and set the value to (number)
	}
	console.log(phonebook);
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
