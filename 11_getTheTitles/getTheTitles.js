const getTheTitles = function(books) {
    let titles = [];
    books.forEach((book, k) => titles[k] = book.title);
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
