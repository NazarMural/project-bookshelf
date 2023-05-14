import { postBook, deleteBook, getBook } from './authentication';
const mainUl = document.querySelector('.shopList__ul');
const markupContainer = document.querySelector('.shopList__container');

import photo1 from '../images/shopingListBg.png';
import photo2 from '../images/shopingListBg@2x.png';
import amazonLogo from '../images/amazonLogo.png';
import bookLogo from '../images/bookLogo.png';
import bookShopLogo from '../images/bookShopLogo.png';
import deleteButtonIcon from '../images/deleteButtonIcon.png';

//create markup
getDataForMarkup();

//validating data in the database
async function getDataForMarkup() {
  let data = await getBook();
  if (data !== null) {
    const markup = await createShoppingListMarkup(data);
    mainUl.insertAdjacentHTML('beforeend', markup);
    markupContainer.insertAdjacentHTML('afterbegin', addTitle);
  } else {
    mainUl.insertAdjacentHTML('beforeend', noDataImg);
  }
}

//remove book
async function removeBook(bookID) {
  deleteBook(bookID);
  let data = await getBook();
  if (data !== null) {
    const markup = await createShoppingListMarkup(data);
    mainUl.innerHTML = markup;
  } else {
    markupContainer.innerHTML = noDataImg;
  }
}

function createShoppingListMarkup(data) {
  return data
    .map(
      ({
        _id,
        book_image,
        title,
        description,
        author,
        list_name,
        buy_links: [{ url: url1 }, { url: url2 }, { url: url3 }],
      }) =>
        `<li class="shopCard">
  <div class="shopCard__card-container">
    <div class="shopCard__photo-container">
      <img class="shopCard__photo" src="${book_image}" alt="${description}" />
    </div>
    <div class="shopCard__box-description">
      <div>
        <div class="shopCard__info-block">
          <div>
            <h3 class="shopCard__title">${title}</h3>
            <p class="shopCard__list-name">${list_name}</p>
          </div>
          <button class="shopCard__btn" data-id=${_id} type="submit">
            <img src="${deleteButtonIcon}" alt="${title}" />
          </button>
        </div>
        <div class="shopCard__description-container block-with-ellipsis">
          <p class="shopCard__description">
            ${description || 'No description'}
          </p>
        </div>
      </div>
      <div class="shopCard__boxAutor">
        <p class="shopCard__author">${author}</p>
        <div class="shopCard__urlList">
          <a href="${url1}" target="_blank"
            ><img
              class="shopCard__url-amazon"
              src="${amazonLogo}"
              alt="${description}"
            />
          </a>
          <a href="${url2}" target="_blank"
            ><img class="shopCard__url" src="${bookLogo}" alt="${description}"
          /></a>
          <a href="${url3}" target="_blank"
            ><img
              class="shopCard__url"
              src="${bookShopLogo}"
              alt="${description}"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</li>`
    )
    .join('');
}

//if no data
const noDataImg = `<h1 class="shopList__title">
    Shopping <span class="shopList__accent">List</span>
  </h1>
  <section class="shopList__section">
    <div class="shopList__imgContainer">
      <p class="shopList__text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
        srcset="${photo1} 1x, ${photo2} 2x"
        src="${photo1}"
        alt="shopping list"
        class="shopList__img"
      />
    </div>
  </section>`;

const addTitle = `<h1 class="shopList__titleMarkup">
    Shopping <span class="shopList__accent">List</span>
  </h1>`;

//addEventListener after create markup
document.addEventListener('click', function (e) {
  const removeBtn = e.target.closest('.shopCard__btn');
  if (removeBtn) {
    let bookID = removeBtn.dataset.id;
    removeBook(bookID);
  }
});
