const quotes = [
    { 
    quote: "Follow your heart.",
    author: "A"
    },
    {
    quote: "No sweat, No sweet.",
    author: "B"
    },
    {
    quote: "Time is gold.",
    author: "C"
    },
    {
    quote: "Time waits for no one.",
    author: "D"
    },
    {
    quote: "Time is flying never to return.",
    author: "E"
    },
    {
    quote: "Life is unfair, get used to it.",
    author: "F"
    },
    {
    quote: "Life is all about timing.",
    author: "G"
    },
    {
    quote: "Past is just past.",
    author: "H"
    },
    {
    quote: "If not now, then when?",
    author: "I"
    },
    {
    quote: "Don't waste your youth.",
    author: "J"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;