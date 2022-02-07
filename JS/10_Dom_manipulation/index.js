// DOM manipulation

let elem = document.getElementById('click'); // use to refer to an element by its id

console.log(elem);

let elemClass = document.getElementsByClassName("container");

console.log(elemClass);

// elemClass[0].style.background = "yellow"  // we can refers to any css property of elements 

elemClass[0].classList.add("bg-primary"); // we can add another css class ot its class list.

elemClass[0].classList.add("text-success"); // elemClass[0].classList.remove("text-success"); we can also remove class from classList

console.log(elemClass[0].innerHTML); // gives the HTML written inside the element

console.log(elemClass[0].innerText); // gives the text written the element

console.log(document.getElementsByTagName('h1')); // used to get reference to a particular element by its tag name

let elemDiv = document.getElementsByTagName('div')
console.log(elemDiv);
let createdElement = document.createElement('p')
createdElement.innerText = "This is an example paragraph"
let createdElement1 = document.createElement('b')
createdElement1.innerText = "This is an example bold"
 
elemDiv[0].appendChild(createdElement) // this will add a child to the element 
elemDiv[0].replaceChild(createdElement1, createdElement); // this will replace the second element with the first element 
// elemDiv[0].removeChild(createdElement1); this is used to remove the child

// Selecting using query/CSS selectors

// let sel=document.querySelector('.container')
// console.log(sel)

let sel=document.querySelectorAll('.container')
console.log(sel)