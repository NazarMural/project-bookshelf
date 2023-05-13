import '../sass/components/_login-form.scss';
import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  update,
  remove,
} from 'firebase/database';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBwj1joeH7cezMQGrV_588ARC2goYFAeHk',
  authDomain: 'book-e1fb3.firebaseapp.com',
  projectId: 'book-e1fb3',
  storageBucket: 'book-e1fb3.appspot.com',
  messagingSenderId: '701181474870',
  appId: '1:701181474870:web:8861dfbbd1f6265a608097',
  measurementId: 'G-1S54659S3E',
};

initializeApp(firebaseConfig);
const auth = getAuth();
let userId = null;
let LOGIN = false;

const menuHeader = document.querySelector('.js-list__nav');
const openSignUp = document.querySelector('[openSignUp]');
const modalBookBtn = document.querySelector('.modal__btn');
const modalBookBtnSignUp = document.querySelector('.modal-book-btn__signUp');
openSignUp.addEventListener('click', openSignUpFunc);

const mobileOut = document.querySelector('.mobile-menu--log-out');
const mobileMenu = document.querySelector('.js-mobile__nav');
const mobileEnter = document.querySelector('.mobile-menu__singin--link')
const userName = document.querySelector('.mobile-menu__user_name')
const mobileConteiner =document.querySelector('.mobile-menu__container')
mobileEnter.addEventListener('click', openSignUpFunc);

const logout = document.querySelector('[logOut]');
const log = document.querySelector('.log');

log.addEventListener('click', signOutLog);
logout.addEventListener('click', signOutLog);
mobileOut.addEventListener('click', signOutLog);

const timer = {
  timeout: 5000,
};

if (localStorage.getItem('uid')) {
  userId = localStorage.getItem('uid');
}

onAuthStateChanged(auth, user => {
  if (user) {
    userId = user.uid;
    localStorage.setItem('uid', userId);
    console.log('User signed in:', user);
    loginFunc(user.emailVerified);


  } else {
    localStorage.removeItem('uid');
    // localStorage.removeItem('user-name');
    LOGIN = false;
    loginFunc(null);
    console.log('User signed out');
  }
});

async function createUser(email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
}

async function signIn(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
}

function signOutLog() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('uid');
      // localStorage.removeItem('user-name');
      LOGIN = false;
    })
    .catch(error => {});
}

function loginFunc(verified) {
  if (verified) {
    LOGIN = true;

    /*menuHeader.innerHTML =
      'ТЫ ЗАШЕЛ КРАСАВЧИК <button type="button" logOut>Log out</button>';*/

    menuHeader.classList.add('show');
    logout.classList.add('show');
    log.classList.add('show')
    openSignUp.classList.remove('show');
    menuHeader.closest('.header__box').classList.add('autorizationstyle');
    mobileOut.classList.add('show');
    mobileMenu.classList.add('show');
    mobileEnter.classList.remove('show');
    userName.classList.add('show')
    mobileConteiner.classList.add('show')
    if (localStorage.getItem('user-name')) {
      userName.textContent = localStorage.getItem('user-name')
      logout.textContent=localStorage.getItem('user-name')
    }
    else {
      userName.textContent = 'USER'
      logout.textContent='USER'
    }
    modalBookBtnSignUp.classList.add('is-hidden');
    modalBookBtn.classList.remove('is-hidden');

    //ДОБАВИть Функцию которая рендерит Хедер для пользователя регистрационных
  } else {
    LOGIN = false;
    //ДОБАВИть Функцию которая рендерит Хедер НЕ для регистрационных
    menuHeader.classList.remove('show');
    logout.classList.remove('show');
    log.classList.remove('show');
    openSignUp.classList.add('show');
    menuHeader.closest('.header__box').classList.remove('autorizationstyle');
    mobileOut.classList.remove('show');
    mobileMenu.classList.remove('show');
    mobileEnter.classList.add('show');
    mobileConteiner.classList.remove('show')
    userName.classList.remove('show')
    modalBookBtnSignUp.classList.remove('is-hidden');
    modalBookBtn.classList.add('is-hidden');
  }
}

function checkLogin() {
  return LOGIN;
}

//Добавить книгу одну - жду тут обьект {  }
function postBook(obj) {
  if (LOGIN && userId) {
    const dbRef = ref(getDatabase(), `users/${userId}/${obj._id}`);
    update(dbRef, obj);
    return true;
  }
  return false;
}

//удалить книгу одну - жду тут айди книги
function deleteBook(id) {
  if (LOGIN && userId) {
    const dbRef = ref(getDatabase(), `users/${userId}/${id}`);
    remove(dbRef);
    return true;
  }
  return false;
}

//полуть список всех книг - ничего не жду)
async function getBook() {
  let res = null;

  await onAuthStateChanged(auth, user => {
    if (user) {
      userId = user.uid;
    }
  });

  await get(child(ref(getDatabase()), `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        res = [...Object.values(snapshot.val())];
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
  return res;
}

const modalSignUp = document.querySelector('[modalSignUp]');
const modalForm = document.querySelector('[modalForm]');
const buttonSignUp = document.querySelector('[buttonSignUp]');
const buttonSignIn = document.querySelector('[buttonSignIn]');

modalSignUp.addEventListener('click', modalSignUpFunc);
modalForm.addEventListener('submit', modalFormFunc);
buttonSignUp.addEventListener('click', buttonSignUpFunc);
buttonSignIn.addEventListener('click', buttonSignInFunc);

let signUpBoll = true;

const collapsibles = document.querySelectorAll('.k-modal__input');
collapsibles.forEach(collapsible => {
  collapsible.addEventListener('input', e => {
    if (e.target.value) e.target.classList.add('hide-label');
    else e.target.classList.remove('hide-label');
  });
});

function showButtonActive(active, nActive) {
  active.classList.add('active');
  nActive.classList.remove('active');
}

function buttonSignUpFunc() {
  signUpBoll = true;
  showButtonActive(buttonSignUp, buttonSignIn);
  modalForm.elements.name.closest('.k-modal__block').style.display = 'block';
  modalForm.publish.textContent = 'Sign up';
}

function buttonSignInFunc() {
  signUpBoll = false;
  showButtonActive(buttonSignIn, buttonSignUp);
  modalForm.elements.name.closest('.k-modal__block').style.display = 'none';
  modalForm.publish.textContent = 'Sign In';
}

function openSignUpFunc() {
  modalSignUp.classList.add('k-modal--active');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', modalSignUpFuncKey);
}

function modalSignUpFunc(e) {
  if (e.target === e.currentTarget || e.target.closest('.k-modal__close'))
    closeModalForm();
}

function modalSignUpFuncKey(e) {
  if (e.code === 'Escape') closeModalForm();
}

function closeModalForm() {
  modalSignUp.classList.remove('k-modal--active');
  document.body.style.overflow = 'overlay';
  document.removeEventListener('keydown', modalSignUpFuncKey);
}

function modalFormFunc(e) {
  e.preventDefault();
  const { name, email, password } = e.target.elements;

  if (!signUpBoll) return modalLoginFunc(email.value, password.value);

  if (name.value && email.value && password.value) {
    createUser(email.value, password.value)
      .then(userCredential => {
        console.log(userCredential);

        localStorage.setItem('user-name', name.value);
        modalForm.reset();
        collapsibles.forEach(collapsible => {
          collapsible.classList.remove('hide-label');
        });

        closeModalForm();
        sendEmail();
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure('Случилась ошибка, повтори снова!');
      });
  } else {
    Notiflix.Notify.failure('Введите все поля!');
  }
}

function modalLoginFunc(email, password) {
  signIn(email, password)
    .then(userCredential => {
      console.log(userCredential);
      userId = userCredential.user.uid;

      localStorage.setItem('uid', userId);
      loginFunc(userCredential.user.emailVerified);

      modalForm.reset();
      collapsibles.forEach(collapsible => {
        collapsible.classList.remove('hide-label');
      });
      closeModalForm();
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Неверный пароль или почта!');
    });
}

function sendEmail() {
  sendEmailVerification(auth.currentUser).then(() => {
    console.log('SENT EMAIL => CHECK');
    Notiflix.Notify.success(
      'Успешно зарегистрировано, проверьте почту для верификации!',
      timer
    );
  });
}

export { postBook, deleteBook, getBook, openSignUpFunc };
