console.log("lets rock");
let quote = true;
let jokes = true;
let shyari = true;

let url = "";
// capture buutons to perform actions
let quotesbtn = document.getElementById("quotesbtn");
let jokebtn = document.getElementById("jokebtn");
let Shayarbtn = document.getElementById("Shayarbtn");


let actionselect = document.getElementById('actionselect');

let genratedtxt = document.getElementById('genratedtxt');
let author = document.getElementById('author');

let anotherbtn = document.getElementById('anotherbtn');
let copybtn = document.getElementById('copybtn');;




function anotherquote(url) {

    let res = get(url);
    res.then(data => {
        genratedtxt.innerText = data.content;
        author.innerText = data.author;

    })
}
function anotherjoke(url) {

    let res = get(url);
    res.then(data => {
        genratedtxt.innerText = data.jokeContent;
        author.innerText = "";

    })
}
function anothershyari(url) {

    let res = get(url);
    res.then(data => {
        genratedtxt.innerText = data.content;
        author.innerText = data.author;

    })
}

async function get(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function copytxt() {
    if (genratedtxt.innerText != "") {
        let copyText = document.getElementById('genratedtxt');


        // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.innerText);

        // Alert the copied text
        alert("Copied the text: " + copyText.innerText);
    }
}
// add event listeners
quotesbtn.addEventListener('click', () => {
    actionselect.innerText = quotesbtn.innerText;
    quote = true
    jokes = false;
    shyari = false;

    url = "https://api.quotable.io/random";
    anotherquote(url);
})
jokebtn.addEventListener('click', () => {
    actionselect.innerText = jokebtn.innerText;
    quote = false
    jokes = true;
    shyari = false;

    url = "https://hindi-jokes-api.onrender.com/jokes?api_key=7e8a5b8bc8cd46bf9e25a7f5618f";
    //7e8a5b8bc8cd46bf9e25a7f5618f
    anotherjoke(url);
})
Shayarbtn.addEventListener('click', () => {
    actionselect.innerText = Shayarbtn.innerText;
    quote = false
    jokes = false;
    shyari = true;
    url = "https://api.quotable.io/random?tags=love";
    //7e8a5b8bc8cd46bf9e25a7f5618f
    anothershyari(url);
})


anotherbtn.addEventListener('click', () => {
    if (genratedtxt.innerText != "") {
        if (quote) {
            url = "https://api.quotable.io/random";
            anotherquote(url);
        }
        else if (jokes) {
            url = "https://hindi-jokes-api.onrender.com/jokes?api_key=7e8a5b8bc8cd46bf9e25a7f5618f";
            anotherjoke(url);
        }
        else if (shyari) {
            url = "https://api.quotable.io/random?tags=love";
            anothershyari(url);
        }
    }
})

copybtn.addEventListener('click', copytxt);
