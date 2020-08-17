/* Write a function that receives an​ array of words​ and finds ​occurrences of given words(case-sensitive)​ in that sentence.
The input will come as an array​ of strings​. The ​first string​ will contain the ​words​ you will be looking for separated by a ​space​. All​ strings after that​ will be the words you will be looking for.
Print for ​each word​ how many times it ​occurs.​ The words should be ​sorted by count in descending​. 

1. Setup function and call. 
2. .shift() off the first item of the input, which is a string. Then .split(" ") the string into an array. Now you'll have an array of words to search for. This is the "needle(s)" we are searching for in the array of words (haystack).
3. Loop through the array of words to find and create a new key using the word and set the value to a string of 0, not a number. 
4. Create a new loop, to loop over each word from the original array and see if the key exists in your object. If it does, increment the value of that key by 1. 

5. Now the trickier part! If you have an alternative idea or solution start with that. This is just how I solved it. This was prob my 2nd or 3rd idea! 

6. Using something new to Objects since 2017 we are going to create a an array of arrays that are key value pairs! Then sort! 

	let entries = Object.entries(wordsCounter);
  let sorted = entries.sort((a, b) => a[1] + b[1]);
  
7. Sorted now contains a sorted array of arrays. You can loop over this with a for of, then each item, since its an array you access the key with index[0] and the count with index[1].

*/
