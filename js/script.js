/******************************************
*****************************************/

// The code is available on the following repository:
// https://github.com/edugoncalvess/lab1CSIS3380-003Fall2022.git



/*** 
 * `quotes` array 
***/
// Empty "quotes" array -- the text said to start with an empty array.
let quotes = [];

// populating the array
quotes.push(['You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.', 'Madeleine L\'Engle', '', '']);
quotes.push(['If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that.', 'Stephen King', '', '2000']);
quotes.push(['Either write something worth reading or do something worth writing.', 'Benjamin Franklin', '', '1738']);
quotes.push(['You must stay drunk on writing so reality cannot destroy you.', 'Ray Bradbury', 'Zen in the Art of Writing', '1990']);
quotes.push(['I can shake off everything as I write; my sorrows disappear, my courage is reborn.', 'Anne Frank', 'The Diary of a Young Girl', '1944']);
quotes.push(['You can make anything by writing.', 'C.S. Lewis', '', '1956']);
quotes.push(['Tears are words that need to be written.', 'Paulo Coelho', 'Aleph', '2010']);
quotes.push(['If my doctor told me I had only six minutes to live, I wouldn\'t brood. I\'d type a little faster.', 'Isaac Asimov', '', '']);
quotes.push(['We write to taste life twice, in the moment and in retrospect.', 'Anaïs Nin', '', '1954']);
quotes.push(['A word after a word after a word is power.', 'Margaret Atwood', '', '']);
quotes.push(['The most valuable of all talents is that of never using two words when one will do.', 'Thomas Jefferson', '', '']);
quotes.push(['Writers live twice.', 'Natalie Goldberg', '', '2006']);
quotes.push(['Your time is limited, so don’t waste it living someone else’s life.', 'Steve Jobs', '', '2005']);
quotes.push(['Love the life you live. Live the life you love.', 'Bob Marley', '', '']);
quotes.push(['The biggest adventure you can take it to live the life of your dreams.', 'Oprah Winfrey', '', '2002']);
quotes.push(['The simple things are also the most extraordinary things, and only the wise can see them.', 'Paulo Coelho', 'The Alchemist', '1993']);
quotes.push(['Life isn’t about finding yourself. Life is about creating yourself.', 'George Bernard Shaw', '', '']);
quotes.push(['The best and the most beautiful things in the word cannot be seen or ever touched. They must be felt with the heart.', 'Helen Keller', '', '']);
quotes.push(['Everything has beauty, but not everyone sees it.', 'Confucius', '', '']);
quotes.push(['Don’t quit. Suffer now and live the rest of your life as a champion.', 'Muhammad Ali', '', '']);
    
// Empty selectedQuote object
let selectedQuote = {};


/***
 * `getRandomQuote` function
***/
// initializing currentIndex, variable used to avoid repeting the same quote sequentially. Used -1 as an invalid index for simplicity
let currentIndex = -1;

function getRandomQuote ( ) {


    // Part A - getting a random index
    let newIndex = -1; // Used -1 as an invalid index for simplicity
    let randomNumberToIndex = -1; // Used -1 as an invalid index for simplicity

    randomNumberToIndex = Math.floor(Math.random() * (quotes.length));

    if (randomNumberToIndex != currentIndex) {
        newIndex = randomNumberToIndex;
    }
    else {
        while (randomNumberToIndex = currentIndex) {
            randomNumberToIndex = Math.floor(Math.random() * (quotes.length));
                if (randomNumberToIndex != currentIndex) {
                    newIndex = randomNumberToIndex;
                }

        }
    }


    // Part B - Populating an Object with data from the quotes array and with the random index.
    selectedQuote = {
            quote: quotes[newIndex][0],
            sourceOfQuote: quotes[newIndex][1],
            citationOfQuote: quotes[newIndex][2],
            yearOfQuote: quotes[newIndex][3]
    }

    // In this version of code, the method returns an object with the quote.
    return selectedQuote;
}





/***
 * `printQuote` function
***/
function printQuote() {
    // temporary variable used to build the citation text
    let quoteContent = "";
    let authorCitationAndYear = "";

    // calling the method that selects a random quote and insert the data into an object.
    // In this version of code, the method returns an object with the quote.
    let varSelectedQuote = getRandomQuote();


    // Building the citation text
    authorCitationAndYear += varSelectedQuote.sourceOfQuote;
    if (varSelectedQuote.citationOfQuote != '') {
       authorCitationAndYear += '<span class="citation">' +  varSelectedQuote.citationOfQuote; 
    }

    if (varSelectedQuote.yearOfQuote != '') {
        authorCitationAndYear += '</span><span class="year">' + varSelectedQuote.yearOfQuote + '</span>'
    }
    

    // Note that I decided to change the innerHTML of the two texts separately, instead of change the whole content of the div (class="quote-box")

    // Changing the Quote text
    document.querySelector( `.quote`).innerHTML = varSelectedQuote.quote;
    // Changing the citation text with the previously built text
    document.querySelector( `.source`).innerHTML = authorCitationAndYear;


}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener(`click`, printQuote);
