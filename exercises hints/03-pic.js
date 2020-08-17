/* Write function that:
● Records a ​car number​ for every car that enters the ​parking lot
● Removes a ​car number​ when the car goes out
● Input will be array of strings in format ​[direction, carNumber]
Print the output with all car numbers which are in the parking lot ​sorted in ascending by number. Print ​“Parking Lot is Empty” ​if empty. 

1. There are many ways to solve this, try your idea first! 
2. Set up function with arguments for testing! 
3. Create an empty array for your parking lot. We'll push tags into this array and slice them out as cars leave. 
4. Create a regular for loop to cycle through the array of strings. Split the strings into arrays and then you'll have the commands as index[0] and tag for index[1]. 
5. Still inside the for loop, using a switch, check for the command, if the command is "IN", push the tag to the array. If the command is "OUT" then we will need to delete it. I created a new variable to find the indexOf(carTag) and then used the .splice(indexOfItemToDel, 1) to remove it
6. Outside the for loop, create a new object to for sorting the tags by number. 
7. Each tag will be the key and the numbers from the tag the value. Using a "for of" loop cycle through each item in the parking lot array that was created. Set the key to the tag and then set the value to just the numbers by taking the tag and splice(#, #) out the 4 numbers that start at index[2], then join this array into a string and convert to a Number(). 
8. Doing great! Almost there! 
9. HINT! We are going to sort almost exactly the same as ex 1 words tracker! 
10. Create a new array of the object.entries()
11. Sort them using the same let sorted = entries.sort((a, b) => a[1] - b[1]);
12. Now we are basically done and just need to print the sorted keys to the console. Lots of way to do this! Chose your favorite! 
13. I created a function to do this. Using a "for of" loop to cycle through the array then logging the key which is index[0] of each.  
14. To finish, I use a ternary expression to see if the lot is greater than zero, if it is, I call the function and pass in the sorted lot, if it doesn't pass then it logs the required text the parking lot is empty. 
HINT (some expression) ? sortCars(sorted) : console.log("The parking lot is empty!");
*/

let aBunchOfCars = [
	"IN, CA2844AA",
	"IN, CA1234TA",
	"OUT, CA2844AA",
	"IN, CA9999TT",
	"IN, CA2866HI",
	"OUT, CA1234TA",
	"IN, CA2844AA",
	"OUT, CA2866HI",
	"IN, CA9876HH",
	"IN, CA2822UU",
];
