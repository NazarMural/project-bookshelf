!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequire0a78;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequire0a78=r);var s=r("bpxeT"),a=r("2TvXO"),c=(s=r("bpxeT"),a=r("2TvXO"),"https://books-backend.p.goit.global/books/");function i(t){return l.apply(this,arguments)}function l(){return(l=t(s)(t(a).mark((function e(o){var n,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c).concat(o));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error(n.status);case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s=r("bpxeT"),a=r("2TvXO");var u="https://books-backend.p.goit.global/books/category?category=";function d(t){return p.apply(this,arguments)}function p(){return(p=t(s)(t(a).mark((function e(o){var n,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u).concat(o));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error(n.status);case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s=r("bpxeT"),a=r("2TvXO");var b=r("6JpON");function k(){t(b).Loading.hourglass({clickToClose:!0,svgColor:"#4F2EE8"})}function f(){t(b).Loading.remove()}var g=document.querySelector(".list-categories"),_=document.querySelector(".books-cards__list");function v(){return(v=t(s)(t(a).mark((function e(o){var n;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_.classList.remove("top-books-list"),_.classList.add("category-books-list"),o.preventDefault(),o.target.classList.contains("category__link-all")&&(h(),o.target.classList.add("current-category"),C()),!o.target.classList.contains("category__link")){t.next=15;break}return k(),h(),n=o.target.textContent,o.target.classList.add("current-category"),m(n),t.next=12,d(n);case 12:y(t.sent),f();case 15:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(){var t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((function(t){t.classList.remove("current-category")}));var t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),_.innerHTML=""}function m(t){var e=t.split(" "),o=e.pop(e[e.length-1]),n='<h1 class="books-cards__title">'.concat(e.join(" "),'\n        <span class="books-cards__title-accent"> ').concat(o,"</span></h1>");_.insertAdjacentHTML("beforebegin",n)}function y(t){var e=t.map((function(t){var e=t._id,o=t.book_image,n=t.title,r=t.author;return'\n    <li data-id="'.concat(e,'" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="').concat(o,'" alt="').concat(n,'" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">').concat(n,'</h2>\n    <p class="category-books__author">').concat(r,"</p>\n    </a>\n    </li>")})).join("");_.insertAdjacentHTML("beforeend",e)}function L(){window.scrollTo({top:0,behavior:"smooth"})}g.addEventListener("click",(function(t){return v.apply(this,arguments)})),{btnToTop:document.querySelector(".button-up")}.btnToTop.addEventListener("click",(function(){L()}));var x=r("8nrFW");function T(e){var o=document.querySelectorAll(".js-cat-link");console.log(o),t(x)(o).forEach((function(t){t.textContent===e?t.classList.add("current-category"):t.classList.contains("current-category")&&t.classList.remove("current-category")}))}var w={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function C(){k(),i("top-books").then((function(t){var e;console.log(w.booksCardsList),w.booksCardsList.classList.remove("category-books-list"),w.booksCardsList.classList.add("top-books-list"),w.booksCardsList.innerHTML="",m("Best Sellers Books"),e=t.map((function(t){var e=t.list_name;return'\n    <li class="top-books__item">\n    <h2 class="top-books-title">'.concat(e,'</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="').concat(e,'">See More</button>\n    </div>\n    </li>\n    ')})).join(""),w.booksCardsList.insertAdjacentHTML("beforeend",e),w.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),w.booksCardsButton=document.querySelector(".top-books__button"),function(t){var e=0;console.log(t[e].books),w.topBooksCategories.forEach((function(o){var n=t[e].books.map((function(t){var e=t._id,o=t.book_image,n=t.title,r=t.author;return'\n          <li data-id="'.concat(e,'" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="').concat(o,'" alt="').concat(n,'" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">').concat(n,'</h2>\n          <p class="category-books__author">').concat(r,"</p>\n          </a>\n          </li>")})).join("");o.insertAdjacentHTML("beforeend",n),e++}))}(t),f()})).catch((function(){console.log("Проблема з запитом!")}))}function S(){return(S=t(s)(t(a).mark((function e(o){var n,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.preventDefault(),o.target.classList.contains("top-books__button")){t.next=4;break}return console.log("Ти натиснув не на кнопку."),t.abrupt("return");case 4:return console.log("Ти натиснув на кнопку."),w.booksCardsList.classList.remove("top-books-list"),w.booksCardsList.classList.add("category-books-list"),n=o.target.dataset.list_name,console.log(n),w.booksCardsTitle=document.querySelector(".books-cards__title"),w.booksCardsTitle.remove(),T(n),m(n),w.booksCardsList.innerHTML="",k(),t.next=17,d(n);case 17:r=t.sent,f(),L(),y(r);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}w.booksCardsList.addEventListener("click",(function(t){return S.apply(this,arguments)})),C();s=r("bpxeT"),a=r("2TvXO");var E=document.querySelector(".list-categories");function q(){return(q=t(s)(t(a).mark((function e(){var o,n,r,s,c,l,u,d,p;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("category-list");case 2:for(o=t.sent,n=[],r=!0,s=!1,c=void 0,t.prev=5,l=o[Symbol.iterator]();!(r=(u=l.next()).done);r=!0)d=u.value.list_name,n.push(d);t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),s=!0,c=t.t0;case 13:t.prev=13,t.prev=14,r||null==l.return||l.return();case 16:if(t.prev=16,!s){t.next=19;break}throw c;case 19:return t.finish(16);case 20:return t.finish(13);case 21:console.log(n),p=n.sort((function(t,e){return t.localeCompare(e)})).map((function(t){return'<li class="category__item"><a href="" class="js-cat-link category__link">'.concat(t,"</a></li>")})).join(""),E.insertAdjacentHTML("beforeend",p);case 24:case"end":return t.stop()}}),e,null,[[5,9,13,21],[14,,16,20]])})))).apply(this,arguments)}E.insertAdjacentHTML("afterbegin",'<li><a href="./index.html" class="js-cat-link category__link-all current-category">All category</a></li>'),function(){q.apply(this,arguments)}(),r("xpKCW");s=r("bpxeT"),a=r("2TvXO");var j=r("95ECi"),M=document.querySelector(".books-cards__list"),A=document.querySelector(".backdrop--hidden"),H=document.querySelector(".close-btn"),B=document.querySelector(".book-container"),O=document.querySelector(".modal__btn"),N=document.querySelector(".modal-book-btn__signUp"),X=document.querySelector(".information-about-status");function D(){return(D=t(s)(t(a).mark((function e(o){var n,r,s,c,l,u;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!0,"DIV"!==o.target.nodeName&&"P"!==o.target.nodeName&&"H2"!==o.target.nodeName&&"A"!==o.target.nodeName){t.next=25;break}return B.innerHTML="",H.addEventListener("click",R),r=o.target.closest(".category-books__item"),s=r.dataset.id,A.classList.remove("backdrop--hidden"),t.next=9,i(s);case 9:return c=t.sent,console.log(c),B.insertAdjacentHTML("afterbegin",U(c)),t.next=14,(0,j.getBook)();case 14:if(null===(l=t.sent)){t.next=24;break}u=0;case 17:if(!(u<l.length)){t.next=24;break}if(l[u]._id!==s){t.next=21;break}return n=!1,t.abrupt("break",24);case 21:u++,t.next=17;break;case 24:n?(O.textContent="Add to shopping list",X.classList.add("is-hidden")):(O.textContent="Remove from the shopping list",X.classList.remove("is-hidden"));case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=t(s)(t(a).mark((function e(o){var n,r,s,c,l;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!0,t.next=3,(0,j.getBook)();case 3:return r=t.sent,s=O.dataset.id,t.next=7,i(s);case 7:if(c=t.sent,null===r){t.next=17;break}l=0;case 10:if(!(l<r.length)){t.next=17;break}if(r[l]._id!==s){t.next=14;break}return n=!1,t.abrupt("break",17);case 14:l++,t.next=10;break;case 17:n?((0,j.postBook)(c),O.textContent="Remove from the shopping list",X.classList.remove("is-hidden")):((0,j.deleteBook)(s),O.textContent="Add to shopping list",X.classList.add("is-hidden"));case 18:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function R(){A.classList.add("backdrop--hidden"),B.innerHTML=""}function U(t){var e=t._id,o=t.book_image,n=(t.buy_links,t.title),r=t.description,s=t.author,a='<img src="'.concat(o,'" alt="').concat(n,'"  class="book-cover"/>\n  <div class="text-container"><h2 class="book-cover__title">').concat(n,'</h2>\n  <p class="book-cover__author">').concat(s,'</p>\n  <p class="book-cover__description">').concat(r,"</p>\n  </div>");return O.dataset.id="".concat(e),a}M.addEventListener("click",(function(t){return D.apply(this,arguments)})),N.addEventListener("click",j.openSignUpFunc),O.addEventListener("click",(function(t){return F.apply(this,arguments)})),A.addEventListener("click",(function(t){t.target.classList.contains("backdrop")&&A.classList.add("backdrop--hidden")})),window.addEventListener("keydown",(function(t){"Escape"===t.code&&A.classList.add("backdrop--hidden")})),r("95ECi"),r("jCI1E"),r("llppj")}();
//# sourceMappingURL=index.01383806.js.map