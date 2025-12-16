function bookTemplate(book) {
  const imageSrc = book.image || "./img/logo/book.png";

  return `
    <article class="book-card">
      <img class="book-cover" src="${imageSrc}" alt="Cover von ${book.name}">

      <div class="book-content">
        <div class="book-title">
          <h2>${book.name}</h2>
          <p class="book-author">von: ${book.author}</p>
        </div>

        <div class="meta">
          <div class="meta-row">
            <span class="meta-label">Genre:</span>
            <span class="meta-value">${book.genre}</span>
          </div>

          <div class="meta-row">
            <span class="meta-label">Erschienen:</span>
            <span class="meta-value">${book.publishedYear}</span>
          </div>

          <div class="meta-row likes-row">
            <span class="meta-label">Likes:</span>
            <span class="meta-value">
              <span class="heart ${
                book.liked ? "liked" : ""
              }" onclick="toggleLike(${book.id})">♥</span>
              <span class="like-count">${book.likes}</span>
            </span>
          </div>
        </div>

        <div class="book-price">
          ${book.price.toFixed(2)} €
        </div>

        <section class="book-comments">
          ${renderComments(book.comments)}
        </section>

       <section class="input-comments">
         <input
          class="comment-input"
          type="text"
          placeholder="Schreibe deinen Kommentar!"
        />

          <button class="button-comments" type="button" aria-label="Kommentar senden">
            <img src="./img/logo/commentButton.png" alt="" />
          </button>
        </section>

      </div>
    </article>
  `;
}

function renderComments(comments) {
  if (!comments || comments.length === 0) {
    return ` <p class ="no-comments">Keine Kommentare vorhanden. </p>`;
  }

  let html = `<div class="comments">`;

  for (let i = 0; i < comments.length; i++) {
    html += `
    <div class="comments">
    <strong>[${comments[i].name}]</strong><br> ${comments[i].comment}
    </div>
    `;
  }

  html += `</div>`;
  return html;
}

