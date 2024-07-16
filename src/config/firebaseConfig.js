import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrrmaLLVBsojcYlIot8le5BKMu0TZx6hM',
  authDomain: 'housie-bonza-9a898.firebaseapp.com',
  projectId: 'housie-bonza-9a898',
  storageBucket: 'housie-bonza-9a898.appspot.com',
  messagingSenderId: '249721900543',
  appId: '1:249721900543:android:fb2936c432d6a205f56bca'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
