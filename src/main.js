// Função para exibir os resultados da busca de livros
function bookSearch() {
  // Obtém a referência ao elemento HTML com o ID "search-results"
  let searchResultsSection = document.getElementById("search-results");

  // Inicializa uma string vazia para acumular o conteúdo HTML dos resultados da busca
  let results = "";

  // Itera sobre cada objeto de livro no array global `books`
  for (let book of books) {
    // Constrói um trecho de HTML para um único item de resultado da busca
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

  // Atualiza o conteúdo interno do elemento da seção de resultados da busca
  // com o conteúdo HTML acumulado dos resultados da busca
  searchResultsSection.innerHTML = results;
}