import { fetchCategoryList } from './fetch-category';

const listCategory = document.querySelector('.list-categories');
const bookSection = document.querySelector('.books-cards__list');
const sectionTitle = document.querySelector('.books-cards__title');

listCategory.addEventListener('click', onClickCategory);

async function onClickCategory(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('category__link')) {
    return;
  }
  removeCurrentClass();
  bookSection.innerHTML = '';
  const category = evt.target.textContent;
  evt.target.classList.add('current-category');
  sectionTitle.textContent = category;
  const categoryItem = await fetchCategoryList(category);
  createMarkupBooks(categoryItem);
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
      const { book_image, title, author } = item;
      return `
    <li>
    <img src="${book_image}" alt="${title}">
    <h2>${title}</h2>
    <p>${author}</p>
    </li>`;
    })
    .join('');
  bookSection.insertAdjacentHTML('beforeend', markup);
}
