import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAF78tUeHTpac0_5sK7xhHxxtCr0qHRYUQ',
  authDomain: 'whats-app-clone-2-acc8c.firebaseapp.com',
  projectId: 'whats-app-clone-2-acc8c',
  storageBucket: 'whats-app-clone-2-acc8c.appspot.com',
  messagingSenderId: '965624800500',
  appId: '1:965624800500:web:39cbac8cf3537dfb756aa1',
  measurementId: 'G-8180BBK87X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
