function bookSearch() {
  let searchResultsSection = document.getElementById("search-results");

  let results = "";
  let searchInput = document.getElementById("search-input").value;

  for (let book of books) {
    if(book.title.includes(searchInput) || book.author.includes(searchInput)){
      results += `
        <div class="result-item">
          <img src="./images/${book.image}.${book.ext}" alt="">  <div class="item-description">
            <h2>
              <a href="#" target="_blank">${book.title}</a>  </h2>
            <p>
              ${book.synopsis}  </p>
            <p><strong>Páginas:</strong> ${book.pages}</p>  <p><strong>Gênero:</strong> ${book.gender}</p>  <p><strong>Autor:</strong> ${book.author}</p>  </div>
        </div>
      `;
    }
  }

  searchResultsSection.innerHTML = results;
}