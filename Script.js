function createElement(Bauthor, Btitle, Bimg, Bprice, Binfo){
    var div1 = $("<div></div>").attr('class', 'card');
    var cardIMG = $("<img>").attr('class', 'card-img');
    cardIMG.appendTo(div1);



    var cardElem = div1.appendTo('body');

    return cardElem;
}


fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ka73KGDAJdvE4e97W71B4GMTkwBPwoAa')
.then(response => response.json())
.then(data => {
    var book = data.results.books;
    book.forEach(element => {
        console.log(element.author);
    });
});
