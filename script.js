const bookList = document.getElementById("bookList");
const STORAGE_KEY = "bookStoreData"

function init(){
  loadFromLocalStorage();
  renderBooks();
}

function renderBooks() {
  let html = "";

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const imageSrc = book.image || "./img/logo/book.png";
    html += bookTemplate(book, imageSrc);
    
  }
  bookList.innerHTML = html;
}


function toggleLike(bookId) {
  const book = books.find((b) => b.id === bookId);

  if (book.liked) {
    book.likes--;
    book.liked = false;
  } else {
    book.likes++;
    book.liked = true;
  }

  saveToLocalStorage();
  renderBooks();  
}

function addComment(bookId, button) {
  const book = books.find((b) => b.id === bookId);
  

  const input = button
    .closest(".input-comments")
    .querySelector(".comment-input");

  const text = input.value.trim();
  if (text === "") return;

  book.comments.push({
    name: "Gast",
    comment: text,
  });

  input.value = "";
  renderBooks();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

}

function loadFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return;
  }

 books = JSON.parse(stored);
}
