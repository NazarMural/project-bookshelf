import Notiflix from 'notiflix';

export function loader() {
  Notiflix.Loading.hourglass({
    clickToClose: true,
    svgColor: '#4F2EE8',
  });
}

export function loadRemove() {
  Notiflix.Loading.remove();
}
