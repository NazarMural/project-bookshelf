import { fetchSearchResult } from './js/fetch-search-result';

const refs = {
  listCategories: document.querySelector('.list-categories'),
};

fetchSearchResult('category-list')
  .then(categories => {
    console.log(categories);
    console.log(categories[0].list_name);
    console.log(createCategoriesMarkup(categories));
    addMarkup(refs.listCategories, createCategoriesMarkup(categories));
  })
  .catch(() => {
    console.log('Проблема з запитом!');
  });

function createCategoriesMarkup(categories) {
  return categories
    .map(
      category => `
        <li class="category-list__item">
        <p>${category.list_name}</p>
        </li>
        `
    )
    .join('');
}

function addMarkup(ref, markup) {
  ref.insertAdjacentHTML('beforeend', markup);
}
