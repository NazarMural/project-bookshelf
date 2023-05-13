export function changeCurrentCategory(list_name) {
  const categoryArray = document.querySelectorAll('.js-cat-link');
  console.log(categoryArray);
  [...categoryArray].forEach(category => {
    // if (category.textContent === 'Best Sellers Books')
    if (category.textContent === list_name) {
      category.classList.add('current-category');
    } else {
      if (category.classList.contains('current-category')) {
        category.classList.remove('current-category');
      }
    }
  });
}
