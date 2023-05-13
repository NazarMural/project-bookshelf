import { supportItems } from './support-items';
import Swiper from 'swiper';
 // import Swiper from 'swiper';
  // import Swiper from 'swiper/bundle';
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

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  breakpointsBase: container,
  centeredSlidesBounds: true,
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
             pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
  },
  //      scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
 });

//  swiper.enable();

// function arrCopy(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
// const arr3 = arrCopy(supportItems);

function addEl(arr3) {
  // for (let i = 0; i < arr3.length; i++ ) {
  //   arr3[i].id2 = indexOff(arr3);
  //   console.log(arr3[i].id2);
  // }
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
// function supportItemsId(arr) {
//   const copyArr = [...arr];
//    const result = copyArr.map((el) => {
//      el["id"] = "fond";
//            return el;
//         });
//         return result;
// }
// supportItemsId(supportItems);

addEl(supportItems);
console.log(supportItems);
