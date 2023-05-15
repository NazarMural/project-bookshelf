export function scrollAnchor() {
  document.getElementById('category-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
