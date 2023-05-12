import { supportItems } from './support-items';
 import Swiper from 'swiper';

const container = document.querySelector('.list-support');


const markup = createSupport(supportItems);

container.insertAdjacentHTML('beforeend', markup);

function createSupport(items) {
  return items
    .map(
      ({ title, url, img }) =>
        `<li class="swiper-slide support__item">
            <a class="support__link" href="${url}" target="_blank"
                  rel="noreferrer noopener nofollow">
                <img
                    class="support__image"
                    src="${img}"
                    data-source="${url}"
                    alt="${title}"
                />
            </a>
        </li>`
    )
    .join('');
};

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  breakpointsBase: container,
  centeredSlidesBounds: true,
  // autoHeight: true,
    loop: true,
   effect: 'flip',
  cssMode: true,
     slidesPerView: 4,
  spaceBetween: 10,
    breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20
    },
  },
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });

//  swiper.enable();