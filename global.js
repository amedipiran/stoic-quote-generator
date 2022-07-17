quoteText = document.querySelector('.quote');
authorName = document.querySelector('.author .name');
quoteBtn = document.querySelector('button');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');
twitterBtn = document.querySelector('.twitter');


//random quote Function
function randomQuote(){
    quoteBtn.innerText = 'Loading Quote...'
    // Random quote data from api and parsing it into JavaScript object
    fetch('https://stoic-quotes.com/api/quote').then(res => res.json()).then(result =>{
        quoteText.innerText = result.text;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';

    });
}

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    utterance.lang = 'en-US'
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText + ' By ' + '-' + authorName.innerText);
});

twitterBtn.addEventListener('click', () => {
    let tweetUrl = 'https://twitter.com/intent/tweet?text=' + quoteText.innerText + ' - ' + authorName.innerText;
    window.open(tweetUrl, '_blank');
});


quoteBtn.addEventListener('click', randomQuote);