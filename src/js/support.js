import { supportItems } from "./support-items";

const container = document.querySelector('.list-support');

const markup = createSupport(supportItems);

container.insertAdjacentHTML('beforeend', markup);

function createSupport(items) { 
    return items.map(({ title, url, img }) => 
        `<li class="support__item">
            <a class="support__link" href="${url}">
                <img
                    class="support__image"
                    src="${img}"
                    target="_blank"
                    data-source="${url}"
                    alt="${title}"
                />
            </a>
        </li>`
    ).join('');
};