import { team } from './team-items';
import svgGithubUrl from '../images/sprite.svg';

const teamList = document.querySelector('.modal-team__list');
const openModalTeamLink = document.querySelector('.footer-link');
const closeModalTeamBtn = document.querySelector('.modal-team__close-btn');
const modalTeam = document.querySelector('[data-modal-team]');

creatMarkupTeam();
openModalTeamLink.addEventListener('click', onClickModalTeam);
closeModalTeamBtn.addEventListener('click', onCloseModalTeam);
// document.body.addEventListener('keyup', onKeyCloseModalTeam, false);

function onClickModalTeam(evt) {
  evt.preventDefault();
  document.body.classList.add('modal-team-open');
  modalTeam.classList.remove('backdrop-team--hidden');
  window.addEventListener('keyup', onKeyUp);
}

function onCloseModalTeam(evt) {
  evt.preventDefault();
  closeModalTeam();
}

// function onKeyCloseModalTeam(e) {
//   const key = e.keyCode;
//   if (key === 27) {
//     // document.querySelector('.modal.active').classList.remove('active');
//     modalTeam.classList.add('backdrop-team--hidden');
//     document.body.classList.remove('modal-team-open');
//   }
// }
// document.body.removeEventListener('keyup', onKeyCloseModalTeam);

function creatMarkupTeam() {
  const markup = team
    .map(
      ({
        name,
        img,
        position,
        url,
        description,
      }) => ` <li class="modal-team__item">
  <div class="modal-team__img-container">
      <img class="modal-team__img" src="${img}" alt="${name}" width="150" height="150">
              <a class="modal-team__link-github" target="_blanc" href="${url}">
              <svg class="modal-team__icon-github" width="24" height="24">
              <use href="${svgGithubUrl}#icon-github"></use>
          </svg></a>
      </svg>
  </div>
  <h3 class="modal-team__title">${name}</h3>
  <span class="modal-team__position">${position}</span>
  <p class="modal-team__description">${description}</p>
</li>`
    )
    .join('');
  teamList.insertAdjacentHTML('beforeend', markup);
}

modalTeam.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop-team')) {
    closeModalTeam();
  }
}

function onKeyUp({ code }) {
  if (code === 'Escape') {
    closeModalTeam();
  }
}

function closeModalTeam() {
  modalTeam.classList.add('backdrop-team--hidden');
  document.body.classList.remove('modal-team-open');
  window.removeEventListener('keyup', onKeyUp);
}
