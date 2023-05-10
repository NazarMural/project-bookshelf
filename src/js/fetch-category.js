const BASE_URl = 'https://books-backend.p.goit.global/books/category?category=';

export async function fetchCategoryList(requestTheme) {
  const response = await fetch(`${BASE_URl}${requestTheme}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const category = await response.json();

  return category;
}
