import { fetchSearchResult } from './fetch-search-result';

const listCategory = document.querySelector('.list-categories');

function getMarkupAllCategory() {
  const markup =
    '<li><a href="#category-title" class="js-cat-link category__link-all current-category">All category</a></li>';
  listCategory.insertAdjacentHTML('afterbegin', markup);
}

getMarkupAllCategory();

async function getMarkupCategoryList() {
  const categoryList = await fetchSearchResult('category-list');
  const categoryArr = [];
  for (const { list_name } of categoryList) {
    categoryArr.push(list_name);
  }
  console.log(categoryArr);
  const markup = categoryArr
    .sort((a, b) => a.localeCompare(b))
    .map(
      item =>
        `<li class="category__item"><a href="#category-title" class="js-cat-link category__link">${item}</a></li>`
    )
    .join('');
  listCategory.insertAdjacentHTML('beforeend', markup);
}

getMarkupCategoryList();
// changeCurrentCategory();
