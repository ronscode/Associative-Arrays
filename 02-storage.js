/* Write a function that stores products and their quantity
▪ If the same product appears more than once, add the new quantity to the old one */
function storage(input) {
	let map = new Map(); // create a new empty set or object of key values.
	for (let string of input) {
		let tokens = string.split(" ");
		console.log(tokens);
		let product = tokens[0];
		let quantity = Number(tokens[1]);
		if (!map.has(product)) {
			map.set(product, quantity);
		} else {
			let currQuantity = map.get(product); // go get current key value
			let newQuantity = (currQuantity += quantity); // amount to add to key and value
			map.set(product, newQuantity); // reset the existing key to the new higher value
		}
	}
	//console.log(map.entries());
	// TODO: Print Map
	// for (prod of map.entries()) {
	// 	console.log(`${prod[0]} ${prod[1]}`);
	// }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
