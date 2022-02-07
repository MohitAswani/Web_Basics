
// To small amount of data on the clients system we use localStorage

// localStorage stores key,value pairs.


localStorage.setItem('name','Mohit')   // used to store data

console.log(localStorage.getItem('name'))  // used to retrieve data

console.log(localStorage)

localStorage.clear()   // used to clear data

console.log(localStorage)


// We must not use locatStorage to store sensitive information like passwords since its easily visible.

