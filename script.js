const bookList = document.getElementById("bookList");

function renderBooks() {
  let html = "";

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    html += bookTemplate(book);
  }
  bookList.innerHTML = html;
}
renderBooks();
function toggleLike(bookId) {
  const book = books.find((b) => b.id === bookId);

  if (book.liked) {
    book.likes--;
    book.liked = false;
  } else {
    book.likes++;
    book.liked = true;
  }
  renderBooks();
}

console.log(books);
