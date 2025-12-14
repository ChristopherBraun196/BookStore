function bookTemplate(book) {
  const imageSrc = book.image || "./img/logo/book.png";

  return `
    <article class="book-card">
      <img 
        class="book-cover" 
        src="${imageSrc}" 
        alt="Cover von ${book.name}"
      >

     <div class="book-content">
        <div class="book-title">
          <h2>${book.name}</h2>
         <p class="book-author"> von: ${book.author}</p>
        </div>

      <div class="meta">
        <div class="meta-row">
          <span class="meta-label">Genre:</span>
          <span class="meta-value">${book.genre}</span>
        </div>

      <div class="meta">
        <div class="meta-row">
          <span class="meta-label">Erschienen:</span>
          <span class="meta-value">${book.publishedYear}</span>
        </div>

      <div class="meta-row likes-row">
        <span class="meta-label">Likes:</span>
        <span class="meta-value">
          <span class="heart ${book.liked ? "liked" : ""}"
            onclick="toggleLike(${book.id})"
            >
            ♥
            </span>
        <span class="like-count">${book.likes}</span>
      </div>
    </div>

    <section>
    
    
    </section>

    <div class="book-price">
      Preis: ${book.price.toFixed(2)} €
    </div>
    </article>
  `;
}
