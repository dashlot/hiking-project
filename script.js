function addContentFromJson(jsonObject) {
    let result = 
        `<div class="card">
            <img src="${jsonObject.img}">
            <h3>${jsonObject.title}</h3>
            <p>${jsonObject.text}</p>
            <div class="like-dislike">
                    <div class="like">
                        <button type="button"><i class="fa-regular fa-thumbs-up"></i></button>
                    </div>
                    <div class="dislike">
                        <button type="button"><i class="fa-regular fa-thumbs-down"></i></button>
                    </div>
                </div>
            </div>
            `
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
    
    let countOfLikes = 0;
    let countOfDislikes = 0;

    $('.like button').click(function() {
        countOfLikes +=1;
        console.log(`Likes = ${countOfLikes}`);
    })
    $('.dislike button').click(function() {
        countOfDislikes +=1;
        console.log(`Dislikes = ${countOfDislikes}`);
    }) 

    $('.button form button').on('click', function() {
        let loadingIcon = $('#loading-icon')
        loadingIcon.html(`<i class="fa-solid fa-spinner"></i>`)
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        let randomInt = getRandomInt(0, 6);
        let url = arrayUrls[randomInt];
        
        
        $.get(url, function( response ) {
            loadingIcon.html(`<p></p>`);
            let jsonContent = response.cards;            
            for(let i = 0; i<3; i++) {
                let jqObj = $('.cards.extra');
                let oldCon = jqObj.html();
                let newCon = oldCon +
                addContentFromJson(jsonContent[i])
                jqObj.html(newCon);
            } 

            console.log('before like button adding click handler')
            $('.like button').unbind().click(function() {
                alert("You like it!")
            })
            
            $('.dislike button').unbind().click(function() {
                alert("You dislike it!")
            })
        })

    })

    let subscribe = $('.child2 form input');
    subscribe.on('click', function() {
        alert("Suckmydick");
    })
    
    let getCity = $('.discount-text form button');
    getCity.on('click', function() {
        $.get( "http://ip-api.com/json", function( data ) {
            let divCity = $('#city-from-api');
            divCity.html(`<p>${data.city}</p>`); 
        });


    })
}




