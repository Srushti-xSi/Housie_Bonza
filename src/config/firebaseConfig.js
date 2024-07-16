import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWT9wh6S81ePr22A5SQTaHjRGO-dP1Q_c",
  authDomain: "housie-bonza.firebaseapp.com",
  projectId: "housie-bonza",
  storageBucket: "housie-bonza.appspot.com",
  messagingSenderId: "775920509512",
  appId: "1:775920509512:android:b49ea3157042406337ae7d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };