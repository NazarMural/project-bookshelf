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

if (localStorage.getItem('uid')) {
  userId = localStorage.getItem('uid');
}

onAuthStateChanged(auth, user => {
  if (user) {
    userId = user.uid;
    localStorage.setItem('uid', userId);
    console.log('User signed in:', user);
    checkLoginVerified(user.emailVerified);
  } else {
    localStorage.removeItem('uid');
    LOGIN = false;
    console.log('User signed out');
  }
});

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential);

      sendEmailVerification(auth.currentUser).then(() => {
        console.log('SENT EMAIL => CHECK');
      });
    })
    .catch(error => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential);
      userId = userCredential.user.uid;
      localStorage.setItem('uid', userId);
      checkLoginVerified(userCredential.user.emailVerified);
    })
    .catch(error => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signOutLog() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('uid');
      LOGIN = false;
    })
    .catch(error => {});
}

function checkLoginVerified(verified) {
  verified ? (LOGIN = true) : (LOGIN = false);
}

// Задать масив
//set(ref(getDatabase(), 'users/' + userId), items);

//Добавить книгу одну - жду тут обьект {  }
function postBook(obj) {
  const dbRef = ref(getDatabase(), `users/${userId}/${obj._id}`);
  update(dbRef, obj);
}

//удалить книгу одну - жду тут айди книги
function deleteBook(id) {
  const dbRef = ref(getDatabase(), `users/${userId}/${id}`);
  remove(dbRef);
}

//полуть список всех книг - ничего не жду)
async function getBook() {
  let res = null;
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
