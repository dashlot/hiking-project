// Первый вариант, где три переменные в jquery
    let jQueryObj = $('.cards.extra');
    let oldObj = jQueryObj.html();
    let newObj = oldObj +
        addContentFromJson(jsonContent[i]);
    jQueryObj.html(newObj);
      
// Второй вариант, где jquery в одну строку 
    let jQueryObj2 = $('.cards.extra');
    jQueryObj2.html(jQueryObj2.html() + addContentFromJson(jsonContent[i]));

// Третий вариант, гдe js в одну строку
    let jsContent = document.querySelector('cards.extra');
    jsContent.innerHTML += addContentFromJson(jsContent[i]); 

// Чертвертый вариант, где в js три переменные
    let jsContent2 = document.querySelector('cards.extra');
    let oldJS = jsContent2.innerHTML;
    let newJS = oldJS + addContentFromJson(jsContent[i]);
    jsContent2.innerHTML(newJS);


