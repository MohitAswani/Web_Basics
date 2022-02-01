// Functions

// Used to implement DRY(do not repeat yourself)
function avg(a,b){
    return (a+b)/2;
}

console.log(avg(4,5));
console.log(avg(4,6));

function driver(age){
    if(age>=18)
    return true
    else
    return false
}

console.log(driver(45))
console.log(driver(4))