function fillCardFromJson(jsonObject) {
    let result =
    '<div class="card">'+
        '<img src="' + jsonObject.img + '">'+
        '<h3>' + jsonObject.title + '</h3>'+
        '<p>' + jsonObject.text + '</p>'+
    '</div>';
    return result
}



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

        for (let i = 0; i < 3; i++) {
            const divContent = document.querySelector('.cards.extra');
            divContent.innerHTML += fillCardFromJson(jsonContent[i]);
        }

        // const divContent = document.querySelector('.content1');
        // // const elem0 = jsonContent[0];
        // divContent.innerHTML = fillCardFromJson(jsonContent[0]);


        // const divContent2 = document.querySelector('.content2');
        // const elem1 = jsonContent[1];
        //     divContent2.innerHTML = fillCardFromJson(elem1);
        
        // const divContent3 = document.querySelector('.cards.extra');
        //     divContent3.innerHTML =
        // '<div class="card">'+ 
        //     '<img src="' + jsonContent[2].img + '">'+
        //     '<h3>'+ jsonContent[2].title + '</h3>'+
        //     '<p>' + jsonContent[2].text + '</p>'+
        // '</div>'
    });
    
    let subscribe = document.querySelector('.child2 form input');
    subscribe.addEventListener('click', function() {
        alert("Suckmydick")
        }
    )
//     debugger;
}


