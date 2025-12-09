const bookList = document.getElementById('bookList');


function renderBooks(){
    let html = '';

    for (let i = 0; i < books.length; i++){
        const book = books[i];
        html += bookTemplate(book);   
    }
    bookList.innerHTML= html;
}


renderBooks();

console.log(books);