
let string="hello world";

console.log(string.length);

console.log(string.indexOf("wor")); // returns the index of first occurence

console.log(string.indexOf("z")); // returns -1

console.log(string.lastIndexOf('d')); // returns the index of last occurence

console.log(string.slice(1,3));  // finds the substrings from first_index to last_index excluding the last index

console.log(string.substring(1,2));  // finds the substrings from first_index to last_index excluding the last index

console.log(string.replace('l','T'));  // replaces only first occurence of the string