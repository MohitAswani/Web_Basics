/*
There are two ways of adding events : 

1) Either directly in the HTML attributes of the element.

2) We get a reference to that element and functionality to its events
*/

function clicked(){
    console.log("The button was clicked")
}

// To add a load event to the tab we can do that following
window.onload=function(){
    console.log("Document was loaded")
}

// Below is another way of adding event listeners
document.getElementById("container1").addEventListener('click',function(){
    console.log("Container 1 was clicked")
})

// Also since we have added click listeners to both container1 and button so when we click button both the events happen

// Below is way of adding a event which is triggered mouse enters that element.
document.getElementById("container2").addEventListener('mouseover',function(){
    console.log("Mouse over Container 2")
})

// Below is way of adding a event which is triggered mouse exists that element.
document.getElementById("container3").addEventListener('mouseout',function(){
    console.log("Mouse out of Container 3")
})

let prevHTML=document.querySelectorAll('.container')[1].innerHTML

// Below is way of adding a event which is triggered when we leave the mouse click.
document.getElementById("click1").addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML
    console.log("Mouse up of click1")
})

// Below is way of adding a event which is triggered when our mouse is pressed.
document.getElementById("click1").addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>Ssup bitches?<\b>"
    console.log("Mouse up of click2")
})

// So basically in the above case text in container 2 will be set as long as our mouse is pressed.