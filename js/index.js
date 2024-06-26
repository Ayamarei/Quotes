
var quotes = [{
    quote: "“Be yourself; everyone else is already taken.”",
     auther:"Oscar Wilde"
}, {
    quote: "“So many books, so little time.”",
     auther:" -- Frank Zappa"
    }, {
        quote: "“A room without books is like a body without a soul.”",
        auther:"-- Marcus Tullius Cicero"
    },
     {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" ,
        auther:"-- Dr. Seuss"
    },
     {
        quote: "“You only live once, but if you do it right, once is enough.”",
        auther:"-- Mae West"
    },
     {
        quote: '"You miss 100% of the shots you dont take." ',
        auther:"-- Wayne Gretzy"
    },
     {
        quote: "“Be the change that you wish to see in the world.”",
        auther:" -- Mahatma Gandhi"
    }
]



function getQuotes() {
    let num = Math.floor(Math.random() * quotes.length)
    document.getElementById('quoteOutPut').innerHTML = quotes[num].quote
    document.getElementById('authorOutPut').innerHTML = quotes[num].auther
}








// Math.floor(Math.random)