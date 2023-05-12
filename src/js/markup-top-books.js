import { fetchSearchResult } from './fetch-search-result';
import { fetchCategoryList } from './fetch-category';
import { createMarkupBooks } from './book-category';
import { addHeading } from './book-category';
const refs = {
  booksCardsList: document.querySelector('.books-cards__list'),
  booksCardsTitle: null,
  topBooksCategories: null,
  booksCardsButton: null,
};

refs.booksCardsList.addEventListener('click', onClickSeeMore);

allCategoryMarkup();

export function allCategoryMarkup() {
  fetchSearchResult('top-books')
    .then(categoriesTopBooks => {
      console.log(refs.booksCardsList);

      refs.booksCardsList.classList.remove('category-books-list');
      refs.booksCardsList.classList.add('top-books-list');

      refs.booksCardsList.innerHTML = '';
      addHeading('Best Sellers Books');

      createCategoriesTopBooksMarkup(categoriesTopBooks);

      refs.topBooksCategories = document.querySelectorAll(
        '.top-books-categories__list'
      );
      refs.booksCardsButton = document.querySelector('.top-books__button');

      createTopBooksMarkup(categoriesTopBooks);
    })
    .catch(() => {
      console.log('Проблема з запитом!');
    });
}

function createTopBooksMarkup(categoriesTopBooks) {
  let numberCategories = 0;

  console.log(categoriesTopBooks[numberCategories].books);

  refs.topBooksCategories.forEach(element => {
    const markup = categoriesTopBooks[numberCategories].books
      .map(({ _id, book_image, title, author }) => {
        return `
          <li data-id="${_id}" class="category-books__item is-hidden-books">
          <a href="" class="category-books__link">
          <div class="category-books__img-thumb">
          <img src="${book_image}" alt="${title}" class="category-books__img">
          <p class="card-overlay">Quick view</p>
          </div>
          <h2 class="category-books__title">${title}</h2>
          <p class="category-books__author">${author}</p>
          </a>
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
    <li class="top-books__item">
    <h2 class="top-books-title">${list_name}</h2>
    <ul class="top-books-categories__list">
                
    </ul>
    <div class="top-books__button-box">
    <button class="top-books__button" data-list_name="${list_name}">See More</button>
    </div>
    </li>
    `
    )
    .join('');

  refs.booksCardsList.insertAdjacentHTML('beforeend', markup);
}

async function onClickSeeMore(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('top-books__button')) {
    console.log('Ти натиснув не на кнопку.');
    return;
  }
  console.log('Ти натиснув на кнопку.');
  refs.booksCardsList.classList.remove('top-books-list');
  refs.booksCardsList.classList.add('category-books-list');
  const category = evt.target.dataset.list_name;
  console.log(category);
  refs.booksCardsTitle = document.querySelector('.books-cards__title');
  refs.booksCardsTitle.remove();
  addHeading(category);
  refs.booksCardsList.innerHTML = '';
  const categoryItem = await fetchCategoryList(category);
  createMarkupBooks(categoryItem);
}
