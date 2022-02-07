let arr=["Item1",2,"Item3",null,true];

console.log(arr);

// Array methods

console.log(arr.length)

arr.pop();
console.log(arr);

arr.push("Mohit")
console.log(arr);

arr.shift();  // removes the first element
console.log(arr);

arr.unshift("Akshat") // add an element at the beginning and returns the length of the next array
console.log(arr);


console.log(arr.toString());

let brr=[1,56,12,34,1,4,2];
console.log(brr.sort())  // sort the numbers alphabetically 

console.log(brr.sort(function(a,b){
    return a-b;
}))   // to sort the elements numerically we can just pass the compare function in sort method of the array
 
