export function changeCurrentCategory(list_name) {
  const categoryArray = document.querySelectorAll('.js-cat-link');
  [...categoryArray].forEach(category => {
    if (category.textContent === list_name) {
      category.classList.add('current-category');
    } else {
      if (category.classList.contains('current-category')) {
        category.classList.remove('current-category');
      }
    }
  });
}
