window.onload = function() {
    const caller = document.querySelector('.button form button');
    caller.addEventListener('click', function() {
        let jsonContent = [];

        jsonContent[0] = {
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiking-quotes-1586278882.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*",
            title: "Lorem ipsum",
            text: "It's beautiful brilliant nature."
        };
        jsonContent[1] = {
            img: "https://www.bergans.com/pub_images/original/1fasthiking.jpg", 
            title: "Lorem ipsum",
            text: "It's astonished air. Smell it!"
        }

        jsonContent[2] = {
            img: "https://www.bergans.com/pub_images/original/fasthiking1.jpg",
            title: "Lorem ipsum",
            text: "BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla" 
        }
        const divContent = document.querySelector('.content1');
            divContent.innerHTML = "<div class=\"card\"> <img src=\"" + jsonContent[0].img + "\"><h3> \"" + jsonContent[0].title + "\" </h3> <p> \"" + jsonContent[0].text + "\"</p></img></div>";
            const divContent2 = document.querySelector('.content2');
            divContent2.innerHTML = "<div class=\"card\"> <img src=\"" + jsonContent[1].img + "\"><h3> \"" + jsonContent[1].title + "\" </h3> <p> \"" + jsonContent[1].text + "\"</p></img></div>"
            const divContent3 = document.querySelector('.content3');
            divContent3.innerHTML = "<div class=\"card\"> <img src=\"" + jsonContent[2].img + "\"><h3> \"" + jsonContent[2].title + "\" </h3> <p> \"" + jsonContent[2].text + "\"</p></img></div>"
    });
    
    let subscribe = document.querySelector('.child2 form input');
    subscribe.addEventListener('click', function() {
        alert("Suckmydick")
        }
    )
}


