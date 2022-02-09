function card(){
    document.createElement("div");
}


fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ka73KGDAJdvE4e97W71B4GMTkwBPwoAa')
.then(response => response.json())
.then(data => {
    var book = data.results.books;
    book.forEach(element => {
        console.log(element.author);
    });
});
