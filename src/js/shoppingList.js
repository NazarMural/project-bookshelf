let shoppingList = null;

(function getShoppingList () {
    for( let key in localStorage) {
        if(!localStorage.hasOwnProperty(key)) {
            continue;
        }
        console.log('key ==>', key);
        console.log(localStorage.getItem(key));
        const {img, description, title, author, genre} = JSON.parse(localStorage.getItem(key));
        shoppingList += `<div>
            <img src="${img}" alt=""/>
            <div class="main_description">
                <div>
                    <div>
                        <h3>${title}</h3>
                        <p>${genre}</p>
                    </div>
                    <button></button>
                </div>
                <p>${description}</p>
                <div>
                    <span>${author}</span>
                    <span></span>
                </div>
            </div>
        </div>`;
    }
    if (!shoppingList) {
        return document.querySelector('#shoplist__main').insertAdjacentHTML('beforeend', '<include src="./partials/shoppingList.html"></include>');
    }
    document.querySelector('#shoplist__main').insertAdjacentHTML('beforeend', shoppingList);
})();