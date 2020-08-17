/* // 2. Odd Occurrences
// Write a function that extracts all the elements of a sentence that occurred odd number of times (​case-insensitive​) The input comes as a ​single string​. The words will be ​separated by a single space​. 
1. Write function and call. 
2. Convert string to lower case 
3. Split string of words into an array of word strings. Hint you can do both at the same time! 
4. Create a new .Map object to hold the words as keys and values for the count
5. Solve your own way at this point, here is how I did it. 
6. Using a "for of" loop, cycle through each word in the array. Check to see "if" there is already the key value pair (word is the key, value is the count). 
7. Use the .set(key, value) method to add a word and its current count of 1.
8. "else" if the key already exists? Add 1 to the value, then re ".set(key, value)" that entry.
9. Then I created a new empty array variable to hold all the odd keys.
10. Using another "for of" loop, check to see if the value of each key is odd, if it is .push(theKey) (not the value!) to the array. Hint! console.log the .Map you created to get ideas on how to access the values. 
11. Then use a .join(" ") to print the output as requested. 
12. There are many many ways to solve this! 
 */
