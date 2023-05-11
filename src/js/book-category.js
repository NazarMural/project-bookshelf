import { fetchCategoryList } from './fetch-category';

const listCategory = document.querySelector('.list-categories');
const bookSection = document.querySelector('.books-cards__list');
const sectionTitle = document.querySelector('.books-cards__title');

listCategory.addEventListener('click', onClickCategory);

async function onClickCategory(evt) {
  bookSection.classList.add('category-books-list');
  evt.preventDefault();
  if (evt.target.classList.contains('category__link')) {
    removeCurrentClass();
    bookSection.innerHTML = '';
    const category = evt.target.textContent;
    evt.target.classList.add('current-category');
    sectionTitle.textContent = category;
    const categoryItem = await fetchCategoryList(category);
    createMarkupBooks(categoryItem);
  }
  // if (evt.target.classList.contains('category__link-all')) {
  // }
}

function removeCurrentClass() {
  const allCategory = document.querySelectorAll('.category__link');
  allCategory.forEach(category => {
    category.classList.remove('current-category');
  });
}

function createMarkupBooks(category) {
  const markup = category
    .map(item => {
      const { _id, book_image, title, author } = item;
      return `
    <li data-id="${_id}" class="category-books__item">
    <img src="${book_image}" alt="${title}" class="category-books__img">
    <h2 class="category-books__title">${title}</h2>
    <p class="category-books__author">${author}</p>
    </li>`;
    })
    .join('');
  bookSection.insertAdjacentHTML('beforeend', markup);
}
