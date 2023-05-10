const BASE_URl = 'https://books-backend.p.goit.global/books/';

export async function fetchSearchResult(requestTheme) {
  const response = await fetch(`${BASE_URl}${requestTheme}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const arrayElements = await response.json();

  return arrayElements;
}
