import { fetchSearchResult } from './fetch-search-result';

const refs = {
  sectionBooksCards: document.querySelector('.section-books-cards'),
};

fetchSearchResult('top-books')
  .then(categoriesTopBooks => {
    console.log(categoriesTopBooks);
    // console.log(topBooks[0].list_name);
    // console.log(createCategoriesMarkup(categories));
    // addMarkup(refs.listCategories, createCategoriesMarkup(categories));
    console.log(categoriesTopBooks[0].list_name);
    createCategoriesTopBooksMarkup(categoriesTopBooks);
    refs.topBooksCategories = document.querySelectorAll(
      '.top-books-categories'
    );

    createTopBooksMarkup(categoriesTopBooks);
  })
  .catch(() => {
    console.log('Проблема з запитом!');
  });

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
    <button data-list_name="${list_name}">See More</button>
    </li>
    `
    )
    .join('');

  refs.sectionBooksCards.insertAdjacentHTML('beforeend', markup);
}

// function addMarkup(ref, markup) {
//   ref.insertAdjacentHTML('beforeend', markup);
// }
