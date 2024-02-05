function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      calculatePages(data);
    });
}

function fetchCharacter(number) {
  fetch(`https://anapioficeandfire.com/api/characters/${number}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function calculatePages(books) {
  let totalPages = 0;
  for (let book of books) {
    totalPages += book.numberOfPages;
    console.log(`number of pages total: ${totalPages}`);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchCharacter(1031);
});
