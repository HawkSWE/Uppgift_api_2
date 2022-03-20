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
        var titel = element.title;
        var besk = element.description;
        var bild = element.book_image;
        var is = element.primary_isbn10;

        const förf = [];
        const tit = [];
        const beskrivning = [];
        const bilder = [];
        const isbn = [];

        förf[nummer] = author;
        tit[nummer] = titel;
        beskrivning[nummer] = besk;
        bilder[nummer] = bild;
        isbn[nummer] = is;
        


        $.get( "https://booksrun.com/api/price/sell/"+isbn[nummer]+"?key=esylhw1ujq6ohqj2l7te", function( data ) {


        console.log(data);
        });

        nummer++;

    });
});


