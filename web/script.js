// Onclick of the button 
// document.querySelector("button#randoming").onclick = function () { 
//     // Call python's random_python function 
//     eel.random_python()(function(number){					 
//         // Update the div with a random number returned by python 
//         document.querySelector(".random_number").innerHTML = number; 
//     }) 
// }

// // Onclick of the button 
// document.querySelector("button#gobutton").onclick = function () { 
//     // Call python's random_python function 
//     // eel.random_python()(function(number){					 
//     //     // Update the div with a random number returned by python 
//     //     document.querySelector(".random_number").innerHTML = number; 
//     // }) 
//     // eel.open_facebook();
//     window.location.replace("http://localhost:8000/");
// }

setTimeout(() => {
    window.location.replace("http://localhost:8000/");
}, 3000);