window.onload = function() {
    const element = document.getElementById('show-more');
    element.addEventListener("mouseover", function() {
        const jsonContent = {
            img: "https://www.w3schools.com/images/colorpicker2000.png",
            title: "Spectre",
            text: "It's beautiful brilliant spectre image"
        } 
         const divContent = document.getElementById("more-content");
         divContent.innerHTML = "<div class=\"card\"> <img src=\"" + jsonContent.img + "\"></img></div>" 

    });

    

}


