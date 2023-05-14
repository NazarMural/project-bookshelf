import { supportItems } from './support-items';
import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

const container = document.querySelector('.list-support');

const markup = createSupport(supportItems);

container.insertAdjacentHTML('beforeend', markup);

function createSupport(items) {
    addEl(items);
  return items
    .map(
      ({ title, url, img, key }) =>
        `<li class="swiper-slide support__item"><span>${key}</span>
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

function addEl(arr3) {
  arr3[0].key = '01';
  arr3[1].key = '02';
  arr3[2].key = '03';
  arr3[3].key = '04';
  arr3[4].key = '05';
  arr3[5].key = '06';
  arr3[6].key = '07';
  arr3[7].key = '08';
  arr3[8].key = '09';
  return arr3;
};

addEl(supportItems);

function sliderSupport() {
  const slider = document.querySelector('.support-container');
  const arrowNext = slider.querySelector('.swiper-button-next');
  const swiper = new Swiper(document.querySelector('.swiper'), {
    direction: 'vertical',
    // breakpointsBase: container,
    centeredSlidesBounds: true,
    loop: true,
    // effect: 'flip',
    cssMode: true,

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    speed: 800,

    slidesPerGroup: 1,
    initialSlide: 0,

    slidesPerView: 0,
    spaceBetween: 10,

    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: arrowNext,
      // prevEl: '.swiper-button-prev',
    },
  });
}
window.addEventListener('load', sliderSupport, false);
