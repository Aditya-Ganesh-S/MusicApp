import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAgZ6CxW3dqsfMaZTKP9o_5wBDjdRbyiBs',
  authDomain: 'music-e2d6a.firebaseapp.com',
  projectId: 'music-e2d6a',
  storageBucket: 'music-e2d6a.appspot.com',
  messagingSenderId: '453706006360',
  appId: '1:453706006360:web:74f14f63646d05e7b06f2d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
