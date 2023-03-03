fetch("https://anapioficeandfire.com/api/books")
.then((resp) => resp.json())
.then(data => renderBooks(data));



const renderBooks = (books) => {
  books.forEach(book => {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

