//console.log("Logging info");
// f658bbb5b3764a2c8d629bad15edcda4

let newsAccordion = document.getElementById('newsAccordion');
let source = 'bbc-news';
let apiKey = 'f658bbb5b3764a2c8d629bad15edcda4';

// creating ajax get request to get news articles
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let jsonText = JSON.parse(this.responseText);
        let articles = jsonText.articles;
        console.log(articles);
        let fullNews = "Top news of the day";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0" "text-left">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" 
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    ${index+1}. ${element["title"]} 
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["description"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
                                </div>
                            </div>
                        </div>`
            fullNews+=news;        
        });
        newsAccordion.innerHTML = fullNews;
    }
    else
        console.log("An error occurred while fetching the data");
}
xhr.send();

let search = document.getElementById('searchTxt');
let inputVal;
search.addEventListener("input", function(){
    inputVal = search.value;
    console.log('Input event fired', inputVal);
})
    let enter = document.getElementById('enter');
    enter.addEventListener("click", function(){
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `https://newsapi.org/v2/everything?q=${inputVal}&apiKey=f658bbb5b3764a2c8d629bad15edcda4`, true);
        xhr2.onload = function () {
            if (this.status === 200) {
                console.log('request successful');
                let jsonText = JSON.parse(this.responseText);
                let articles = jsonText.articles;
                console.log(articles);
                let fullNews="News related to the word: "+ inputVal;
                articles.forEach(function (element, index) {
                    let news = `<div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" 
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            ${index+1}. ${element["title"]}
                                            </button>
                                        </h2>
                                    </div>
        
                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body">
                                            ${element["description"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
                                        </div>
                                    </div>
                                </div>`
                    fullNews+=news;        
                });
                newsAccordion.innerHTML = fullNews;
            }
            else
        console.log("An error occurred while fetching the data");
        }
    xhr2.send();
    })

    let time ;
    let inputTime;
    time = document.getElementById('goBackByADay'), inputTime = "22-11-21";
    time.addEventListener("click", function(){
        const xhr3 = new XMLHttpRequest();
        xhr3.open('GET', `http://api.mediastack.com/v1/news?languages=en&date=${inputTime}&access_key=c11f542f1385f58bd577264618b2822f`, true);
        xhr3.onload = function () {
            if (this.status === 200) {
                console.log('request successful');
                let jsonText = JSON.parse(this.responseText);
                let articles = jsonText.articles;
                console.log(jsonText.data);
                let fullNews="Yesterday's top news";
                jsonText.data.forEach(function (element, index) {
                    let news = `<div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" 
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            ${index+1}. ${element["title"]}
                                            </button>
                                        </h2>
                                    </div>
        
                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body">
                                            ${element["description"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
                                        </div>
                                    </div>
                                </div>`
                    fullNews+=news;        
                });
                newsAccordion.innerHTML = fullNews;
            }
            else
        console.log("An error occurred while fetching the data");
        }
    xhr3.send();
    })



    let time2 ;
    time2 = document.getElementById('goBackByAMonth'), inputTime = "22-10-21";
    time2.addEventListener("click", function(){
        const xhr4 = new XMLHttpRequest();
        xhr4.open('GET', `http://api.mediastack.com/v1/news?languages=en&date=${inputTime}&access_key=c11f542f1385f58bd577264618b2822f`, true);
        xhr4.onload = function () {
            if (this.status === 200) {
                console.log('request successful');
                let jsonText = JSON.parse(this.responseText);
                let articles = jsonText.articles;
                console.log(jsonText.data);
                let fullNews="";
                jsonText.data.forEach(function (element, index) {
                    let news = `<div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" 
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            ${index+1}. ${element["title"]}
                                            </button>
                                        </h2>
                                    </div>
        
                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body">
                                            ${element["description"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
                                        </div>
                                    </div>
                                </div>`
                    fullNews+=news;        
                });
                newsAccordion.innerHTML = fullNews;
            }
            else
        console.log("An error occurred while fetching the data");
        }
    xhr4.send();
    })



    let time3 ;
    time3 = document.getElementById('customDate');
    time3.addEventListener("input", function(){
        inputTime = time3.value;
        console.log('Input event fired', inputTime);
    })
    time3.addEventListener("click", function(){
        const xhr5 = new XMLHttpRequest();
        xhr5.open('GET', `http://api.mediastack.com/v1/news?languages=en&date=${inputTime}&access_key=c11f542f1385f58bd577264618b2822f`, true);
        xhr5.onload = function () {
            if (this.status === 200) {
                console.log('request successful');
                let jsonText = JSON.parse(this.responseText);
                let articles = jsonText.articles;
                console.log(jsonText.data);
                let fullNews="";
                jsonText.data.forEach(function (element, index) {
                    let news = `<div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" 
                                            aria-expanded="true" aria-controls="collapse${index}">
                                            ${index+1}. ${element["title"]}
                                            </button>
                                        </h2>
                                    </div>
        
                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body">
                                            ${element["description"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
                                        </div>
                                    </div>
                                </div>`
                    fullNews+=news;        
                });
                newsAccordion.innerHTML = fullNews;
            }
            else
        console.log("An error occurred while fetching the data");
        }
    xhr5.send();
    })

