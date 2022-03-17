function createElement(Bauthor, Btitle, Bimg, Bprice, Binfo){
    var div1 = $("<div></div>").attr('class', 'card');
    var cardIMG = $("<img>").attr('class', 'card-img-top');
    cardIMG.appendTo(div1);
    var div2 = $("<div></div>").attr('class', 'card-body');
    div2.appendTo(div1);



    var cardElem = div1.appendTo('body');

    return cardElem;
}


fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ka73KGDAJdvE4e97W71B4GMTkwBPwoAa')
.then(response => response.json())
.then(data => {
    var book = data.results.books;
    book.forEach(element => {
        
        var nummer = 0;
        var author = element.author;

        const förf = [];
        förf[nummer]= author;
        
        console.log(förf[nummer]);

        nummer++;

    });
});
