import { fetchSearchResult } from './fetch-search-result';
import { fetchCategoryList } from './fetch-category';
// import { createMarkupBooks } from './book-category';

const refs = {
  booksCardsList: document.querySelector('.books-cards__list'),
  booksCardsTitle: document.querySelector('.books-cards__title'),
  topBooksCategories: null,
  booksCardsButton: null,
};

refs.booksCardsList.addEventListener('click', onClickSeeMore);

fetchSearchResult('top-books')
  .then(categoriesTopBooks => {
    console.log(refs.booksCardsList);
    allCategoryMarkup(categoriesTopBooks);
  })
  .catch(() => {
    console.log('Проблема з запитом!');
  });

export function allCategoryMarkup(categoriesTopBooks) {
  refs.booksCardsList.innerHTML = '';
  refs.booksCardsTitle.textContent = 'Best Sellers Books';

  createCategoriesTopBooksMarkup(categoriesTopBooks);

  refs.topBooksCategories = document.querySelectorAll('.top-books-categories');
  refs.booksCardsButton = document.querySelector('.books-cards__button');

  createTopBooksMarkup(categoriesTopBooks);
}

function createTopBooksMarkup(categoriesTopBooks) {
  let numberCategories = 0;

  console.log(categoriesTopBooks[numberCategories].books);

  refs.topBooksCategories.forEach(element => {
    const markup = categoriesTopBooks[numberCategories].books
      .map(({ book_image, title, author }) => {
        return `
          <li>
          <img src="${book_image}" alt="${title}">
          <h2>${title}</h2>
          <p>${author}</p>
          </li>`;
      })
      .join('');
    element.insertAdjacentHTML('beforeend', markup);
    numberCategories++;
  });
}

function createCategoriesTopBooksMarkup(categories) {
  const markup = categories
    .map(
      ({ list_name }) => `
    <li class="books-cards__item">
    <h2 class="top-books-title">${list_name}</h2>
    <ul class="top-books-categories">
                
    </ul>
    <button class="books-cards__button" data-list_name="${list_name}">See More</button>
    </li>
    `
    )
    .join('');

  refs.booksCardsList.insertAdjacentHTML('beforeend', markup);
}

async function onClickSeeMore(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('books-cards__button')) {
    console.log('Ти натиснув не на кнопку.');
    return;
  }
  console.log('Ти натиснув на кнопку.');
  const category = evt.target.dataset.list_name;
  refs.booksCardsTitle.textContent = category;
  refs.booksCardsList.innerHTML = '';
  const categoryItem = await fetchCategoryList(category);
  createMarkupBooks(categoryItem);
}

function createMarkupBooks(category) {
  const markup = category
    .map(item => {
      const { book_image, title, author } = item;
      return `
    <li>
    <img src="${book_image}" alt="${title}">
    <h2>${title}</h2>
    <p>${author}</p>
    </li>`;
    })
    .join('');
  refs.booksCardsList.insertAdjacentHTML('beforeend', markup);
}
