
var arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

// for loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for each is a good method to iterate though an array

arr.forEach(function (element) {
    console.log(element);
})

// const is used to define constant
const k = 0;
// k+=1; this will give an error

// let is used for local scope / it is used when we want the variable to stay within a {} scope.
// let is also good for memory management
let j = 0;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

j = 1;
do {
    j++;
    console.log(j);
} while (j < arr.length);


for (var i = 0; i < arr.length; i++) {
    if(i==2)
    // break;
    continue;
    console.log(arr[i]);
}
