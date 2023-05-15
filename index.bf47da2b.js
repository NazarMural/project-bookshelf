function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},s={},a=o.parcelRequire0a78;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in s){var o=s[t];delete s[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,o){s[t]=o},o.parcelRequire0a78=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.bf47da2b.js","auE1R":"amazonLogo.65e47238.png","8kXNz":"bookLogo.22ccf33c.png","hSDsI":"bookShopLogo.082e3bff.png","lp5u4":"sprite.c1e418d9.svg","5UbS1":"index.1a26781c.css","7wQtW":"index.360a861e.js"}'));async function n(t){const o=await fetch(`https://books-backend.p.goit.global/books/${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}async function i(t){const o=await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}var r=a("7Y9D8");function c(){t(r).Loading.hourglass({clickToClose:!0,svgColor:"#4F2EE8"})}function l(){t(r).Loading.remove()}function d(){document.getElementById("category-section").scrollIntoView({behavior:"smooth",block:"start"})}const u=document.querySelector(".list-categories"),m=document.querySelector(".books-cards__list");function g(){const t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((t=>{t.classList.remove("current-category")}));const t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),m.innerHTML=""}function b(t){const o=t.split(" "),e=o.pop(o[o.length-1]),s=`<h1 class="books-cards__title">${o.join(" ")}\n        <span class="books-cards__title-accent"> ${e}</span></h1>`;m.insertAdjacentHTML("beforebegin",s)}function p(t){const o=t.map((t=>{const{_id:o,book_image:e,title:s,author:a}=t;return`\n    <li data-id="${o}" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="${e}" alt="${s}" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">${s}</h2>\n    <p class="category-books__author">${a}</p>\n    </a>\n    </li>`})).join("");m.insertAdjacentHTML("beforeend",o)}u.addEventListener("click",(async function(t){m.classList.remove("top-books-list"),m.classList.add("category-books-list"),t.preventDefault(),t.target.classList.contains("category__link-all")&&(g(),t.target.classList.add("current-category"),f(),d());if(t.target.classList.contains("category__link")){c(),g();const o=t.target.textContent;t.target.classList.add("current-category"),b(o);p(await i(o)),l(),d()}}));function k(){window.scrollTo({top:0,behavior:"smooth"})}function _(t){const o=document.querySelectorAll(".js-cat-link");console.log(o),[...o].forEach((o=>{o.textContent===t?o.classList.add("current-category"):o.classList.contains("current-category")&&o.classList.remove("current-category")}))}({btnToTop:document.querySelector(".button-up")}).btnToTop.addEventListener("click",(()=>{k()}));const h={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function f(){c(),n("top-books").then((t=>{console.log(h.booksCardsList),h.booksCardsList.classList.remove("category-books-list"),h.booksCardsList.classList.add("top-books-list"),h.booksCardsList.innerHTML="",b("Best Sellers Books"),function(t){const o=t.map((({list_name:t})=>`\n    <li class="top-books__item">\n    <h2 class="top-books-title">${t}</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="${t}">See More</button>\n    </div>\n    </li>\n    `)).join("");h.booksCardsList.insertAdjacentHTML("beforeend",o)}(t),h.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),h.booksCardsButton=document.querySelector(".top-books__button"),function(t){let o=0;console.log(t[o].books),h.topBooksCategories.forEach((e=>{const s=t[o].books.map((({_id:t,book_image:o,title:e,author:s})=>`\n          <li data-id="${t}" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="${o}" alt="${e}" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">${e}</h2>\n          <p class="category-books__author">${s}</p>\n          </a>\n          </li>`)).join("");e.insertAdjacentHTML("beforeend",s),o++}))}(t),l()})).catch((()=>{console.log("Проблема з запитом!")}))}h.booksCardsList.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.classList.contains("top-books__button"))return void console.log("Ти натиснув не на кнопку.");console.log("Ти натиснув на кнопку."),h.booksCardsList.classList.remove("top-books-list"),h.booksCardsList.classList.add("category-books-list");const o=t.target.dataset.list_name;console.log(o),h.booksCardsTitle=document.querySelector(".books-cards__title"),h.booksCardsTitle.remove(),_(o),b(o),h.booksCardsList.innerHTML="",c();const e=await i(o);l(),k(),p(e)})),f();const y=document.querySelector(".list-categories");y.insertAdjacentHTML("afterbegin",'<li><a href="#category-title" class="js-cat-link category__link-all current-category">All category</a></li>'),async function(){const t=await n("category-list"),o=[];for(const{list_name:e}of t)o.push(e);console.log(o);const e=o.sort(((t,o)=>t.localeCompare(o))).map((t=>`<li class="category__item"><a href="#category-title" class="js-cat-link category__link">${t}</a></li>`)).join("");y.insertAdjacentHTML("beforeend",e)}(),a("dTazW");var v,L=a("d2gfz");v=new URL(a("kyEFX").resolve("auE1R"),import.meta.url).toString();var w;w=new URL(a("kyEFX").resolve("8kXNz"),import.meta.url).toString();var S;S=new URL(a("kyEFX").resolve("hSDsI"),import.meta.url).toString();const E=document.querySelector(".books-cards__list"),$=document.querySelector(".backdrop"),j=document.querySelector(".close-btn"),C=document.querySelector(".book-container"),T=document.querySelector(".modal__btn"),H=document.querySelector(".modal-book-btn__signUp"),M=document.querySelector(".information-about-status");function q(){$.classList.add("backdrop--hidden"),C.innerHTML=""}E.addEventListener("click",(async function(o){let e=!0;if("DIV"===o.target.nodeName||"P"===o.target.nodeName||"H2"===o.target.nodeName||"A"===o.target.nodeName){C.innerHTML="",j.addEventListener("click",q);const s=o.target.closest(".category-books__item").dataset.id;$.classList.remove("backdrop--hidden");const a=await n(s);console.log(a.buy_links),C.insertAdjacentHTML("beforeend",function({_id:o,book_image:e,buy_links:[{name:s,url:a},{name:n,url:i},{name:r,url:c}],title:l,description:d,author:u}){const m=`<img src="${e}" alt="${l}"  class="book-cover"/>\n  <div class="text-container"><h2 class="book-cover__title">${l}</h2>\n  <p class="book-cover__author">${u}</p>\n  <p class="book-cover__description">${d||"No description"}</p>\n  <ul class="store-icons">\n  <li class="store-icons__item">\n    <a href="${a}"\n      ><img\n        src="${t(v)}"\n        alt="${s}"\n        width="62"\n        height="19"\n        class="store-icon"\n        target="_blank" \n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="${i}" target="_blank" \n      ><img\n        src="${t(w)}"\n        alt="${n}"\n        width="33"\n        height="32"\n        class="store-icon"\n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="${c}"\n    target="_blank"><img\n        src="${t(S)}"\n        alt="${r}"\n        width="38"\n        height="36"\n        class="store-icon"\n    /></a>\n  </li>\n</ul>\n  </div>`;return T.dataset.id=`${o}`,m}(a));const i=await(0,L.getBook)();if(null!==i)for(let t=0;t<i.length;t++)if(i[t]._id===s){e=!1;break}e?(T.textContent="Add to shopping list",M.classList.add("is-hidden")):(T.textContent="Remove from the shopping list",M.classList.remove("is-hidden"))}})),H.addEventListener("click",L.openSignUpFunc),T.addEventListener("click",(async function(t){let o=!0;const e=await(0,L.getBook)(),s=T.dataset.id,a=await n(s);if(null!==e)for(let t=0;t<e.length;t++)if(e[t]._id===s){o=!1;break}o?((0,L.postBook)(a),T.textContent="Remove from the shopping list",M.classList.remove("is-hidden")):((0,L.deleteBook)(s),T.textContent="Add to shopping list",M.classList.add("is-hidden"))})),$.addEventListener("click",(function(t){t.target.classList.contains("backdrop")&&$.classList.add("backdrop--hidden")})),window.addEventListener("keydown",(function({code:t}){"Escape"===t&&$.classList.add("backdrop--hidden")})),a("d2gfz"),a("4QsFx"),a("hgxEb");const A=[{name:"Nazar Mural",position:"Team Lead, Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/nazar-mural.jpg",url:"https://github.com/NazarMural"},{name:"Oleksii Maiok",position:"Scrum, Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/nazar-mural.jpg",url:"https://github.com/Maniyavel"},{name:"Alona Kuznietsova",position:"Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/nazar-mural.jpg",url:"https://github.com/acvetochka"},{name:"Kate Chernysheva",position:"Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/kate-chernysheva.jpg",url:"https://github.com/kateChernysheva1"},{name:"Tetiana Palii",position:" Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/tetiana-palii.jpg",url:"https://github.com/TetiPalii"},{name:"Viktoriia Khmelevska",position:"Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/nazar-mural.jpg",url:"https://github.com/ViktoriiaKhmelevska"},{name:"Nataliia Korotych",position:"Scrum, Developer",description:"",img:"https://raw.githubusercontent.com/NazarMural/project-bookshelf/main/src/images/team/natalia-korotych.jpg",url:"https://github.com/Nataliia-84"}];var N;N=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();const z=document.querySelector(".modal-team__list"),x=document.querySelector(".footer-link"),R=document.querySelector(".modal-team__close-btn"),D=document.querySelector("[data-modal-team]");function F(t){t.preventDefault(),document.body.classList.toggle("modal-team-open"),D.classList.toggle("backdrop-team--hidden")}!function(){const o=A.map((({name:o,img:e,position:s,url:a})=>` <li class="modal-team__item">\n  <div class="modal-team__img-container">\n      <img class="modal-team__img" src="${e}" alt="${o}" width="150" height="150">\n              <a class="modal-team__link-github" target="_blanc" href="${a}">\n              <svg class="modal-team__icon-github" width="24" height="24">\n              <use href="${t(N)}#icon-github"></use>\n          </svg></a>\n      </svg>\n  </div>\n  <h3 class="modal-team__title">${o}</h3>\n  <span class="modal-team__description">${s}</span>\n</li>`)).join("");z.insertAdjacentHTML("beforeend",o)}(),x.addEventListener("click",F),R.addEventListener("click",F),document.body.addEventListener("keyup",(function(t){27===t.keyCode&&(D.classList.remove("backdrop-team--hidden"),document.body.classList.remove("modal-team-open"))}),!1);
//# sourceMappingURL=index.bf47da2b.js.map
