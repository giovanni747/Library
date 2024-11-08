const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}
const book1 = new Book('steve', 'A Clash of Kings', 12);
const book2 = new Book('also steve', 'Game of Thrones',23);
myLibrary.push(book1);
myLibrary.push(book2);
function displayBook(myLibrary) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    myLibrary.forEach((book , index)=> {
        const card =document.createElement("div");
        card.classList.add("book-card");

        const rem = document.createElement("button");
        rem.classList.add("button-30");
        rem.innerText = "x"; 
        card.appendChild(rem);
        rem.addEventListener("click", function() {
          myLibrary.splice(index, 1); 
          displayBook(myLibrary); 
        });

        const title = document.createElement("h2");
        title.classList.add("book-title");
        title.innerText = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.classList.add("book-author");
        author.innerText = `By ${book.author}`;
        card.appendChild(author);

        const page = document.createElement("p");
        page.classList.add("book-pages");
        page.innerText = `${book.pages} pages`;
        card.appendChild(page);

        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.classList.add("checkbox-wrapper-26");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `_checkbox-26-${index}`; 
        checkboxWrapper.appendChild(checkbox);
        const label = document.createElement("label");
        label.setAttribute("for", `_checkbox-26-${index}`);
        const tickMark = document.createElement("div");
        tickMark.classList.add("tick_mark");
        label.appendChild(tickMark);
        checkboxWrapper.appendChild(label);
        card.appendChild(checkboxWrapper);

        const READ = document.createElement("p");
        READ.classList.add("book-read");
        READ.innerText = `Finished?`;
        card.appendChild(READ);
        container.appendChild(card);

        container.appendChild(card);
    });
}
displayBook(myLibrary);
const close = document.getElementById("close");
const open = document.getElementById("button-19");
const modal = document.getElementById("modal");

open.addEventListener('click', () => modal.classList.add("show-modal"));
close.addEventListener('click', () => modal.classList.remove("show-modal"));
window.addEventListener('click', e => {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});

document.querySelector('.modal-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('name').value;
  const author = document.getElementById('title').value;
  const pages = document.getElementById('pagesAmo').value;
  const newBook = new Book(author, title, pages); 
  myLibrary.push(newBook);
  displayBook(myLibrary);

  // Close the modal
  modal.classList.remove("show-modal");
  document.getElementById('name').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pagesAmo').value = '';
});