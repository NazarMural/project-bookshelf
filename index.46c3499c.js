!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequire0a78;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequire0a78=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.46c3499c.js","cX5t3":"amazonLogo.65e47238.png","2t6si":"bookLogo.22ccf33c.png","idSWj":"bookShopLogo.082e3bff.png","5UbS1":"index.44492370.css","1bhX6":"index.0bbbf510.js"}'));var s=r("bpxeT"),a=r("2TvXO"),c=(s=r("bpxeT"),a=r("2TvXO"),"https://books-backend.p.goit.global/books/");function i(t){return l.apply(this,arguments)}function l(){return(l=t(s)(t(a).mark((function e(n){var o,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c).concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.next=7,o.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s=r("bpxeT"),a=r("2TvXO");var u="https://books-backend.p.goit.global/books/category?category=";function d(t){return p.apply(this,arguments)}function p(){return(p=t(s)(t(a).mark((function e(n){var o,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u).concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.next=7,o.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}s=r("bpxeT"),a=r("2TvXO");var b=r("6JpON");function k(){t(b).Loading.hourglass({clickToClose:!0,svgColor:"#4F2EE8"})}function g(){t(b).Loading.remove()}function f(){document.getElementById("category-section").scrollIntoView({behavior:"smooth",block:"start"})}var _=document.querySelector(".list-categories"),v=document.querySelector(".books-cards__list");function h(){return(h=t(s)(t(a).mark((function e(n){var o;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v.classList.remove("top-books-list"),v.classList.add("category-books-list"),n.preventDefault(),n.target.classList.contains("category__link-all")&&(m(),n.target.classList.add("current-category"),C(),f()),!n.target.classList.contains("category__link")){t.next=16;break}return k(),m(),o=n.target.textContent,n.target.classList.add("current-category"),y(o),t.next=12,d(o);case 12:L(t.sent),g(),f();case 16:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function m(){var t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((function(t){t.classList.remove("current-category")}));var t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),v.innerHTML=""}function y(t){var e=t.split(" "),n=e.pop(e[e.length-1]),o='<h1 class="books-cards__title">'.concat(e.join(" "),'\n        <span class="books-cards__title-accent"> ').concat(n,"</span></h1>");v.insertAdjacentHTML("beforebegin",o)}function L(t){var e=t.map((function(t){var e=t._id,n=t.book_image,o=t.title,r=t.author;return'\n    <li data-id="'.concat(e,'" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="').concat(n,'" alt="').concat(o,'" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">').concat(o,'</h2>\n    <p class="category-books__author">').concat(r,"</p>\n    </a>\n    </li>")})).join("");v.insertAdjacentHTML("beforeend",e)}function x(){window.scrollTo({top:0,behavior:"smooth"})}_.addEventListener("click",(function(t){return h.apply(this,arguments)})),{btnToTop:document.querySelector(".button-up")}.btnToTop.addEventListener("click",(function(){x()}));var E=r("8nrFW");function w(e){var n=document.querySelectorAll(".js-cat-link");console.log(n),t(E)(n).forEach((function(t){t.textContent===e?t.classList.add("current-category"):t.classList.contains("current-category")&&t.classList.remove("current-category")}))}var T={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function C(){k(),i("top-books").then((function(t){var e;console.log(T.booksCardsList),T.booksCardsList.classList.remove("category-books-list"),T.booksCardsList.classList.add("top-books-list"),T.booksCardsList.innerHTML="",y("Best Sellers Books"),e=t.map((function(t){var e=t.list_name;return'\n    <li class="top-books__item">\n    <h2 class="top-books-title">'.concat(e,'</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="').concat(e,'">See More</button>\n    </div>\n    </li>\n    ')})).join(""),T.booksCardsList.insertAdjacentHTML("beforeend",e),T.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),T.booksCardsButton=document.querySelector(".top-books__button"),function(t){var e=0;console.log(t[e].books),T.topBooksCategories.forEach((function(n){var o=t[e].books.map((function(t){var e=t._id,n=t.book_image,o=t.title,r=t.author;return'\n          <li data-id="'.concat(e,'" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="').concat(n,'" alt="').concat(o,'" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">').concat(o,'</h2>\n          <p class="category-books__author">').concat(r,"</p>\n          </a>\n          </li>")})).join("");n.insertAdjacentHTML("beforeend",o),e++}))}(t),g()})).catch((function(){console.log("Проблема з запитом!")}))}function S(){return(S=t(s)(t(a).mark((function e(n){var o,r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),n.target.classList.contains("top-books__button")){t.next=4;break}return console.log("Ти натиснув не на кнопку."),t.abrupt("return");case 4:return console.log("Ти натиснув на кнопку."),T.booksCardsList.classList.remove("top-books-list"),T.booksCardsList.classList.add("category-books-list"),o=n.target.dataset.list_name,console.log(o),T.booksCardsTitle=document.querySelector(".books-cards__title"),T.booksCardsTitle.remove(),w(o),y(o),T.booksCardsList.innerHTML="",k(),t.next=17,d(o);case 17:r=t.sent,g(),x(),L(r);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}T.booksCardsList.addEventListener("click",(function(t){return S.apply(this,arguments)})),C();s=r("bpxeT"),a=r("2TvXO");var H=document.querySelector(".list-categories");function q(){return(q=t(s)(t(a).mark((function e(){var n,o,r,s,c,l,u,d,p;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("category-list");case 2:for(n=t.sent,o=[],r=!0,s=!1,c=void 0,t.prev=5,l=n[Symbol.iterator]();!(r=(u=l.next()).done);r=!0)d=u.value.list_name,o.push(d);t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),s=!0,c=t.t0;case 13:t.prev=13,t.prev=14,r||null==l.return||l.return();case 16:if(t.prev=16,!s){t.next=19;break}throw c;case 19:return t.finish(16);case 20:return t.finish(13);case 21:console.log(o),p=o.sort((function(t,e){return t.localeCompare(e)})).map((function(t){return'<li class="category__item"><a href="#category-title" class="js-cat-link category__link">'.concat(t,"</a></li>")})).join(""),H.insertAdjacentHTML("beforeend",p);case 24:case"end":return t.stop()}}),e,null,[[5,9,13,21],[14,,16,20]])})))).apply(this,arguments)}H.insertAdjacentHTML("afterbegin",'<li><a href="#category-title" class="js-cat-link category__link-all current-category">All category</a></li>'),function(){q.apply(this,arguments)}(),r("xpKCW");s=r("bpxeT");var j,A=r("1t1Wn"),B=(a=r("2TvXO"),r("95ECi"));j=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("cX5t3");var M;M=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("2t6si");var O;O=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("idSWj");var R=document.querySelector(".books-cards__list"),N=document.querySelector(".backdrop"),F=document.querySelector(".close-btn"),X=document.querySelector(".book-container"),U=document.querySelector(".modal__btn"),V=document.querySelector(".modal-book-btn__signUp"),D=document.querySelector(".information-about-status");function J(){return(J=t(s)(t(a).mark((function e(n){var o,r,s,c,l,u;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!0,"DIV"!==n.target.nodeName&&"P"!==n.target.nodeName&&"H2"!==n.target.nodeName&&"A"!==n.target.nodeName){t.next=25;break}return X.innerHTML="",F.addEventListener("click",I),r=n.target.closest(".category-books__item"),s=r.dataset.id,N.classList.remove("backdrop--hidden"),t.next=9,i(s);case 9:return c=t.sent,console.log(c.buy_links),X.insertAdjacentHTML("beforeend",Q(c)),t.next=14,(0,B.getBook)();case 14:if(null===(l=t.sent)){t.next=24;break}u=0;case 17:if(!(u<l.length)){t.next=24;break}if(l[u]._id!==s){t.next=21;break}return o=!1,t.abrupt("break",24);case 21:u++,t.next=17;break;case 24:o?(U.textContent="Add to shopping list",D.classList.add("is-hidden")):(U.textContent="Remove from the shopping list",D.classList.remove("is-hidden"));case 25:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=t(s)(t(a).mark((function e(n){var o,r,s,c,l;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=!0,t.next=3,(0,B.getBook)();case 3:return r=t.sent,s=U.dataset.id,t.next=7,i(s);case 7:if(c=t.sent,null===r){t.next=17;break}l=0;case 10:if(!(l<r.length)){t.next=17;break}if(r[l]._id!==s){t.next=14;break}return o=!1,t.abrupt("break",17);case 14:l++,t.next=10;break;case 17:o?((0,B.postBook)(c),U.textContent="Remove from the shopping list",D.classList.remove("is-hidden")):((0,B.deleteBook)(s),U.textContent="Add to shopping list",D.classList.add("is-hidden"));case 18:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function I(){N.classList.add("backdrop--hidden"),X.innerHTML=""}function Q(e){var n=e._id,o=e.book_image,r=t(A)(e.buy_links,3),s=r[0],a=s.name,c=s.url,i=r[1],l=i.name,u=i.url,d=r[2],p=d.name,b=d.url,k=e.title,g=e.description,f=e.author,_='<img src="'.concat(o,'" alt="').concat(k,'"  class="book-cover"/>\n  <div class="text-container"><h2 class="book-cover__title">').concat(k,'</h2>\n  <p class="book-cover__author">').concat(f,'</p>\n  <p class="book-cover__description">').concat(g||"No description",'</p>\n  <ul class="store-icons">\n  <li class="store-icons__item">\n    <a href="').concat(c,'"\n      ><img\n        src="').concat(t(j),'"\n        alt="').concat(a,'"\n        width="62"\n        height="19"\n        class="store-icon"\n        target="_blank" \n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="').concat(u,'" target="_blank" \n      ><img\n        src="').concat(t(M),'"\n        alt="').concat(l,'"\n        width="33"\n        height="32"\n        class="store-icon"\n    /></a>\n  </li>\n  <li class="store-icons__item">\n    <a href="').concat(b,'"\n    target="_blank"><img\n        src="').concat(t(O),'"\n        alt="').concat(p,'"\n        width="38"\n        height="36"\n        class="store-icon"\n    /></a>\n  </li>\n</ul>\n  </div>');return U.dataset.id="".concat(n),_}R.addEventListener("click",(function(t){return J.apply(this,arguments)})),V.addEventListener("click",B.openSignUpFunc),U.addEventListener("click",(function(t){return W.apply(this,arguments)})),N.addEventListener("click",(function(t){t.target.classList.contains("backdrop")&&N.classList.add("backdrop--hidden")})),window.addEventListener("keydown",(function(t){"Escape"===t.code&&N.classList.add("backdrop--hidden")})),r("95ECi"),r("jCI1E"),r("llppj")}();
//# sourceMappingURL=index.46c3499c.js.map
