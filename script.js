// window.onload = function() {
//     const element = document.getElementById('show-more');
//     element.addEventListener("mouseover", function() {
//         const jsonContent = {
//             img: "https://www.w3schools.com/images/colorpicker2000.png",
//             title: "Spectre",
//             text: "It's beautiful brilliant spectre image"
//         } 
//          const divContent = document.getElementById("more-content");
//          divContent.innerHTML = "<div class=\"card\"> <img src=\"" + jsonContent.img + "\"></img></div>" 

//     });
// }

// window.onload = function() {
//     let item = document.querySelector(".but"); 
//     item.addEventListener('click', function() {
//         const divPhrase = document.querySelector(".phrase");
//         divPhrase.innerHTML = "<p>Please</p>"
//     })
// }

window.onload = function() {
    let item = document.getElementsByClassName("but")[0]; 
    item.addEventListener('click', function() {
        const divPhrase = document.querySelector(".phrase");
        divPhrase.innerHTML = "<p>Please</p>"
    })
}