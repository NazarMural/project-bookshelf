let shoppingList = null;

(function getShoppingList () {
    for( let key in localStorage) {
        if(!localStorage.hasOwnProperty(key)) {
            continue;
        }
        
        //console.log(localStorage.getItem(key));
        const {img, description, title, author, genre, buy_links} = JSON.parse(localStorage.getItem(key));
        shoppingList += `<div class="shoppinglist-card">
            <img class= "shoppinglist-img" src="${img}" alt=""/>
            <div class="main_description">
                <div class="shoppinglist-info">
                    
                        <h3 class="shoppinglist-title">${title}</h3>
                        <p class="shoppinglist-text">${genre}</p>
                    
                   
                </div>
               

                <p class="shoppinglist-description">${description}</p>
                <div class="shoppinglist-author">
                    <span>${author}</span>
                    <span>
                    <svg width="10" height="10"><use href="${buy_links}"></use></svg>
                    </span>
                </div>
            </div>
            <button class="shoppinglist-close" data-modal-close>
            <svg class="shoppinglist-close__icon" width="30" height="30">
            <use href="./images/dump.svg#icon-dump"></use></svg>
            </button>
        </div>`;
    }
    if (!shoppingList) {
        return document.querySelector('#shoplist__main').insertAdjacentHTML('beforeend', '<include src="./partials/shoppingList.html"></include>');
    }
    document.querySelector('#shoplist__main').insertAdjacentHTML('beforeend', shoppingList);
})();