//console.log("laddu");
// f658bbb5b3764a2c8d629bad15edcda4

let newsAccordion = document.getElementById('newsAccordion');
let source = 'bbc-news';
let apiKey = 'f658bbb5b3764a2c8d629bad15edcda4';

// creating ajax get request to get news articles
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let jsonText = JSON.parse(this.responseText);
        let articles = jsonText.articles;
        console.log(articles);
        let fullNews = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["content"]}. <a href ="${element["url"]}" target = "_blank">Read more here</a>
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

