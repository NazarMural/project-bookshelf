import { fetchCategoryList } from './fetch-category';
import { allCategoryMarkup } from './markup-top-books';

const listCategory = document.querySelector('.list-categories');
const bookSection = document.querySelector('.books-cards__list');

listCategory.addEventListener('click', onClickCategory);

async function onClickCategory(evt) {
  bookSection.classList.remove('top-books-list');
  bookSection.classList.add('category-books-list');
  evt.preventDefault();
  if (evt.target.classList.contains('category__link-all')) {
    removeMarkup();
    evt.target.classList.add('current-category');
    allCategoryMarkup();
  }
  if (evt.target.classList.contains('category__link')) {
    removeMarkup();
    const category = evt.target.textContent;
    evt.target.classList.add('current-category');
    addHeading(category);
    const categoryItem = await fetchCategoryList(category);
    createMarkupBooks(categoryItem);
  }
}

function removeMarkup() {
  const sectionTitle = document.querySelector('.books-cards__title');
  sectionTitle.remove();
  removeCurrentClass();
  bookSection.innerHTML = '';
}

function addHeading(string) {
  const arr = string.split(' ');
  const lastElement = arr.pop(arr[arr.length - 1]);
  const markup = `<h1 class="books-cards__title">${arr.join(' ')}
        <span class="books-cards__title-accent"> ${lastElement}</span></h1>`;
  bookSection.insertAdjacentHTML('beforebegin', markup);
}

function removeCurrentClass() {
  const allCategory = document.querySelectorAll('.category__link');
  allCategory.forEach(category => {
    category.classList.remove('current-category');
  });
  const categoryLinkAll = document.querySelector('.category__link-all');
  if (categoryLinkAll.classList.contains('current-category')) {
    categoryLinkAll.classList.remove('current-category');
  }
}

function createMarkupBooks(category) {
  const markup = category
    .map(item => {
      const { _id, book_image, title, author } = item;
      return `
    <li data-id="${_id}" class="category-books__item">
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
  bookSection.insertAdjacentHTML('beforeend', markup);
}

export { createMarkupBooks };
export { addHeading };