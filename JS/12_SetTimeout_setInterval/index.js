
// Arrow functions

function sum1(a,b){
    return a+b;
}

// So we can make a function like below, we dont need to make a complete function
sum2=(a,b)=>{
    return a+b;
}

doLog1=()=>{
    console.log("setTimeout fired")
}

// This can be used to schedule a task. For example it will perform doLog 2000 milliseconds after the page is loaded.
setTimeout(doLog1,1000)

doLog2=()=>{
    console.log("setInterval fired")
}

// This is similiar to setTimeout but the only difference is that it will repeat the task after the provided time interval.
// When we use setInterval it returns an id and we can use the id to perform various operations on that setInterval
clr=setInterval(doLog2,2000)

// For example we will stop this interval in the below setTimeout after 10 secs.

stopInterval=()=>{
    clearInterval(clr)
    console.log("Stopping interval")
}

setTimeout(stopInterval,10000)  // this will call the setTimeout function after 10 secs which will stop the interval.


// Even a timeout can be cancelled using the id provided during declaring setTimeout by using clearTimeout()

clrT=setTimeout(doLog1,5000)
clearTimeout(clrT)
