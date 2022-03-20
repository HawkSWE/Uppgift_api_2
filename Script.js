function createElement(Bauthor, Btitle, Bimg, Binfo){
    var div1 = $("<div></div>").attr('class', 'card').attr('style', 'width: 18rem;');
    var cardIMG = $("<img>").attr('class', 'card-img-top').attr('src', Bimg).attr('alt', Btitle);
    cardIMG.appendTo(div1);
    var div2 = $("<div></div>").attr('class', 'card-body');
    div2.appendTo(div1);
    var h51 = $("<h5></h5>").attr('class', 'card-title').append(Btitle);
    h51.appendTo(div2);
    var br1 = $("<br></br>");
    br1.appendTo(div2);
    var h61 = $("<h6></h6>").attr('class', 'card-subtitle', 'text-muted').append("författare: ", Bauthor);
    h61.appendTo(div2);
    var br2 = $("<br></br>");
    br2.appendTo(div2);
    var p1 = $("<p></p>").attr('class', 'card-text').append(Binfo);
    p1.appendTo(div2);
    var br3 = $("<br></br>");
    br3.appendTo(div2);



    var cardElem = div1.appendTo('body');

    return cardElem;
}

function getPrice(isbn10){

    fetch('https://booksrun.com/api/price/sell/'+isbn10+'?key=esylhw1ujq6ohqj2l7te')
    .then(response => response.json())
    .then(data => {
    
        let Nprice = data.result.text.New;

        return Nprice;
    
    });

}


fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ka73KGDAJdvE4e97W71B4GMTkwBPwoAa')
.then(response => response.json())
.then(data => {
    var book = data.results.books;
    book.forEach(element => {
        
        var nummer = 0;
        let author = element.author;
        let titel = element.title;
        let besk = element.description;
        let bild = element.book_image;
        let is = element.primary_isbn10;

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

        let nyPris = getPrice(isbn[nummer]);

        console.log(nyPris);

        
        createElement(förf[nummer], tit[nummer], bilder[nummer], beskrivning[nummer])

        nummer++

    });
});


