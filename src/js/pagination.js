import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export function addPagination() {
  let itemsPerPage = 0; // Кількість елементів на сторінці
  let totalItems = 0; // Загальна кількість елементів
  let visiblePages = 0;

  if (window.innerWidth < 768) {
    itemsPerPage = 4;
    visiblePages = 1;
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
  }

  const listItems = document.querySelectorAll('.shopCard');
  totalItems = listItems.length;

  const firstThreeItems = Array.from(listItems).slice(0, itemsPerPage);
  firstThreeItems.forEach((item, index) => {
    item.classList.remove('is-hidden');
  });

  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('#pagination', options);
  pagination.on('afterMove', evt => {
    const currentPage = evt.page - 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    listItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
}

function updateOptions() {
  const width = window.innerWidth;
  if (width < 768) {
    itemsPerPage = 4;
    visiblePages = 2;
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
  }
}
