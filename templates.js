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
        <h2>${book.name}</h2>
        <p>Autor: ${book.author}</p>
        <p>Erschienen: ${book.publishedYear}</p>
        <p>Preis: ${book.price.toFixed(2)} €</p>
        <p>Likes: ${book.likes}</p>
       
      </div>
    </article>
  `;
}