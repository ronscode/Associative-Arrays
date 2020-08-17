/* You are given an ​array of strings​. Every ​even index ​is representing a ​resource (e.g. Gold, Silver, Copper, and so on), and ​every odd ​– ​quantity​. Your task is to collect the resources and print them each on a new line.
Print the resources and their quantities in format: {resource} –> {quantity}
The quantities inputs will be in the range [1 ... 2 000 000 000]

1. Write function and call for testing
2. Set up an empty object for the count of "metal : amount". ({ key : value })
3. Loop over the array to get the values for the metal and amount. I used a for loop and stepped by 2, there are many ways, all correct. 
4. Check to see "if" the object has the metal for a key and if not? Add the key and value to the object. If the object does already have the key? You'll need to add the incoming value to the current (hint +=)
5. Log your results using a for in to loop through the object key and format with the ->

*/
let mine = ["Gold", "155", "Silver", "10", "Copper", "17"];
