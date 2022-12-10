function addContentFromJson(jsonObject) {
    let result = 
        `<div class="card">
            <img src="${jsonObject.img}">
            <h3>${jsonObject.title}</h3>
            <p>${jsonObject.text}</p>
        </div>`
    return result
};

window.onload = function(){ 
    let arrayUrls = [];
    arrayUrls[0] = "https://run.mocky.io/v3/59e20ba9-3eed-4bc9-aa63-a0bd5a67b08c";
    arrayUrls[1] = "https://run.mocky.io/v3/1533fe10-19c9-437f-a55d-9a8dc19e55a5";
    arrayUrls[2] = "https://run.mocky.io/v3/818216d9-a8ba-42b6-bf4e-5c357ec79a8e";
    arrayUrls[3] = "https://run.mocky.io/v3/1448fcbd-6dff-4f23-9d2d-96c922570b80";
    arrayUrls[4] = "https://run.mocky.io/v3/40699510-f46e-4b4d-b088-24f98cbd873d";
    arrayUrls[5] = "https://run.mocky.io/v3/5dff2a11-7e41-4769-b0be-04d81b10857d";

    let callTheButton = document.querySelector('.button form button');
    callTheButton.addEventListener('click', function() {
        // here (add icon)

        let randomInt = Math.floor(Math.random() * 6);
        let url = arrayUrls[randomInt];
        $.get(url, function( response ) {
            // here disappear (icon)
            let jsonContent = response.cards;            
            for(let i = 0; i<3; i++) {
                let divContent = document.querySelector('.cards.extra');
                divContent.innerHTML += addContentFromJson(jsonContent[i]);        
            }  
        })   
    })
    
    let subscribe = document.querySelector('.child2 form input');
    subscribe.addEventListener('click', function() {
        alert("Suckmydick")
        })
    
    let getCity = document.querySelector('.discount-text form button');
    getCity.addEventListener('click', function() {
        $.get( "http://ip-api.com/json", function( data ) {
            let divCity = document.querySelector('#city-from-api');
            divCity.innerHTML = `<p>${data.city}</p>`
        });
    })
}




