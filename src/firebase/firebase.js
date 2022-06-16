
import { getAnalytics } from "firebase/analytics";
import {initializeApp} from 'firebase/app'
import {getDatabase, ref, set} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjHgo6-9N-JPSb0jpeDDRcu6ZclJDgPx8",
  authDomain: "expensifyappp.firebaseapp.com",
  databaseURL: "https://expensifyappp-default-rtdb.firebaseio.com",
  projectId: "expensifyappp",
  storageBucket: "expensifyappp.appspot.com",
  messagingSenderId: "255135107517",
  appId: "1:255135107517:web:05758a647718606d92ead4",
  measurementId: "G-E2YNWT1X8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase()

set(ref(db), {name: 'Arpit'})