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

function addComment(bookId, button) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const input = button
    .closest(".input-comments")
    .querySelector(".comment-input");

  const text = input.value.trim();
  if (text === "") return;

  book.comments.push({
    name: "Gast",
    comment: text
  });

  input.value = "";
  renderBooks();
}


// console.log(books);
