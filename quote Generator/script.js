// const quotecover = document.getElementById("quote-card") ;
const quote = document.getElementById("para") ;
const author = document.getElementById("name") ;
const btn = document.getElementById("btn") ;
// const category = "happiness"
const url = 'https://api.quotable.io/random' ;

let getQuote = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerText = data.content ;
        author.innerText = data.author ;

    }) ;
} ;
btn.addEventListener("click",getQuote) ;
getQuote() ;

//quote.textcontent = `${data.content}`